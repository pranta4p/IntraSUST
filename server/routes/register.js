const express = require('express');
const router = express.Router();
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

require('dotenv').config();

// Helper function to initialize sheet
async function getSheet() {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        throw new Error('Missing Google Credentials in .env file');
    }

    const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    return doc.sheetsByIndex[0]; // Access the first sheet
}

// @route   POST /api/register
// @desc    Register a new participant to Google Sheets
// @access  Public
router.post('/', async (req, res) => {
    const { name, registrationNumber, department, session, contactNumber, tshirtSize } = req.body;

    // Basic Validation
    if (!name || !registrationNumber || !department || !session || !contactNumber) {
        return res.status(400).json({ message: 'Please enter all required fields' });
    }

    try {
        const sheet = await getSheet();

        // Check for duplicates (optional but recommended)
        // For simplicity, we might skip reading all rows if sheet is huge, 
        // but for this scale it's fine.
        const rows = await sheet.getRows();
        const isDuplicate = rows.some(row => row.get('Registration Number') === registrationNumber);

        if (isDuplicate) {
            return res.status(400).json({ message: 'Participant already registered (Reg No match)' });
        }

        // Add new row
        await sheet.addRow({
            'Name': name,
            'Registration Number': registrationNumber,
            'Department': department,
            'Session': session,
            'Contact Number': contactNumber,
            'T-shirt Size': tshirtSize,
            'Timestamp': new Date().toISOString()
        });

        res.json({
            message: 'Registration successful! Added to Google Sheet.',
        });
    } catch (err) {
        console.error('Google Sheets Error:', err);
        // Write error to file for debugging
        const fs = require('fs');
        fs.appendFileSync('error.log', new Date().toISOString() + ' - ' + err.message + '\n' + JSON.stringify(err) + '\n');

        res.status(500).json({ message: 'Server Error: Could not save to Google Sheet. ' + err.message });
    }
});

module.exports = router;
