const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: String,
        required: true,
    },
    session: {
        type: String,
        enum: ['2022-2023', '2023-2024', '2024-2025'],
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    tshirtSize: {
        type: String,
        enum: ['S', 'M', 'L', 'XL', 'XXL'],
        default: 'L',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Participant', participantSchema);
