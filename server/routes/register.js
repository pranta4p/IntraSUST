const express = require('express');
const router = express.Router();
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

// Helper function
async function getSheet() {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
        throw new Error('Missing Google Credentials');
    }

    const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Ensure headers are set (fixes overwriting issues on empty sheets)
    const EXPECTED_HEADERS = [
        'Timestamp',
        'Name',
        'Registration Number',
        'Department',
        'Session',
        'Contact Number',
        'Tshirt Size',
        'Codeforces Handle' // New Column
    ];

    try {
        await sheet.loadHeaderRow();
    } catch (e) {
        // Headers might be missing
    }

    // If headers are missing or incomplete, set them and ensure there are enough columns.
    if (!sheet.headerValues || sheet.headerValues.length < EXPECTED_HEADERS.length) {
        // Ensure enough columns exist for all headers
        if ((sheet.columnCount || 0) < EXPECTED_HEADERS.length) {
            await sheet.resize({ rowCount: sheet.rowCount, columnCount: EXPECTED_HEADERS.length });
        }
        await sheet.setHeaderRow(EXPECTED_HEADERS);
        // reload to get the new header values
        await sheet.loadHeaderRow();
    }

    console.log('Sheet columns:', sheet.columnCount, 'Headers:', sheet.headerValues);

    return sheet;
}

router.post('/', async (req, res) => {
    try {
        const {
            name,
            registrationNumber,
            department,
            session,
            contactNumber,
            tshirtSize,
            cfHandle // New Field
        } = req.body;

        if (!name || !registrationNumber || !department || !session || !contactNumber) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const sheet = await getSheet();

        // Debug logging
        console.log('Current Row Count:', sheet.rowCount);
        console.log('Loaded Headers:', sheet.headerValues);

        const rows = await sheet.getRows();
        console.log('Fetched Rows Length:', rows.length);

        const isDuplicate = rows.some(row => row.get('Registration Number') === registrationNumber);
        if (isDuplicate) {
            return res.status(400).json({ message: 'Registration Number already exists' });
        }

        // Calculate the next row index (1 = header, data starts at 2)
        const nextRowIndex = rows.length + 2;

        // Expand sheet to accommodate the new row
        if (sheet.rowCount < nextRowIndex) {
            console.log(`Expanding sheet: ${sheet.rowCount} -> ${nextRowIndex}`);
            await sheet.resize({ rowCount: nextRowIndex, columnCount: sheet.columnCount });
        }

        console.log(`Adding new registration at row ${nextRowIndex}...`);

        // Use cells API to write directly via loadCells/getCell/saveUpdatedCells
        const values = [
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }),
            name,
            registrationNumber,
            department,
            session,
            contactNumber,
            tshirtSize,
            cfHandle || '' // Add cfHandle, default to empty string if undefined
        ];

        // Load the exact row range (A..H for that row - 8 columns)
        const rangeA1 = `A${nextRowIndex}:H${nextRowIndex}`;
        await sheet.loadCells(rangeA1);

        // getCell uses zero-based indices
        const rowZero = nextRowIndex - 1;
        for (let col = 0; col < values.length; col++) {
            const cell = sheet.getCell(rowZero, col);
            cell.value = values[col];
        }

        await sheet.saveUpdatedCells();
        console.log('Row Added at row:', nextRowIndex);

        res.json({ message: '✅ Registration successful' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
