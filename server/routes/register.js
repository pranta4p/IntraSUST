const express = require('express');
const router = express.Router();
const Participant = require('../models/Participant');

// @route   POST /api/register
// @desc    Register a new participant
// @access  Public
router.post('/', async (req, res) => {
    const { name, registrationNumber, department, session, contactNumber, tshirtSize } = req.body;

    // Basic Validation
    if (!name || !registrationNumber || !department || !session || !contactNumber) {
        return res.status(400).json({ message: 'Please enter all required fields' });
    }

    try {
        // Check for existing user
        const existingParticipant = await Participant.findOne({ registrationNumber });
        if (existingParticipant) {
            return res.status(400).json({ message: 'Participant already registered with this Registration Number' });
        }

        const newParticipant = new Participant({
            name,
            registrationNumber,
            department,
            session,
            contactNumber,
            tshirtSize,
        });

        const savedParticipant = await newParticipant.save();
        res.json({
            message: 'Registration successful!',
            participant: savedParticipant,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
