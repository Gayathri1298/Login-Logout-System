import bcrypt from 'bcryptjs';


const hashPassword = async (plainPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    return hashedPassword;
};


const testHashing = async () => {
    const plainPassword = 'A3password@123';  
    const hashedPassword = await hashPassword(plainPassword);

    console.log('Hashed Password:', hashedPassword);

   
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    console.log('Password match:', isMatch); 
};

testHashing();

