require('dotenv').config();

console.log('--- .env Validation Report ---');

const checkVar = (name, minLength = 1) => {
    const val = process.env[name];
    if (!val) {
        console.log(`❌ ${name}: MISSING`);
        return false;
    }
    if (val.length < minLength) {
        console.log(`❌ ${name}: TOO SHORT (Length: ${val.length}, Expected > ${minLength})`);
        return false;
    }
    console.log(`✅ ${name}: FOUND (Length: ${val.length})`);
    return true;
};

checkVar('GOOGLE_SHEET_ID', 10);
checkVar('GOOGLE_SERVICE_ACCOUNT_EMAIL', 5);
// Private key usually > 1000 chars
checkVar('GOOGLE_PRIVATE_KEY', 1000);

console.log('------------------------------');
