const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env') });

console.log('--- Environment Check ---');
console.log('SHEET_ID:', process.env.GOOGLE_SHEET_ID ? 'Loaded' : 'MISSING');
console.log('EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? 'Loaded' : 'MISSING');
console.log('PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? 'Loaded' : 'MISSING');
console.log('-------------------------');

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
    res.send('INTRA SUST Contest API is running (Google Sheets Mode)');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
