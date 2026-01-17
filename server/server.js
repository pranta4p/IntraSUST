require('dotenv').config(); // MUST be first

const express = require('express');
const cors = require('cors');
const registerRoute = require('./routes/register');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/register', registerRoute);

app.get('/', (req, res) => {
    res.send('INTRA SUST Contest API is running');
});

// Debug ENV (remove after testing)
console.log('--- ENV CHECK ---');
console.log('SHEET_ID:', !!process.env.GOOGLE_SHEET_ID);
console.log('EMAIL:', !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
console.log('PRIVATE_KEY:', !!process.env.GOOGLE_PRIVATE_KEY);
console.log('-----------------');

// Start server only if not running in Vercel (Vercel handles this automatically)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT}`);
    });
}

module.exports = app;
