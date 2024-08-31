import bcrypt from 'bcryptjs';

async function generateHash() {
    const plainPassword = 'A4password@123';  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    console.log('Newly hashed password:', hashedPassword);
}

generateHash();
