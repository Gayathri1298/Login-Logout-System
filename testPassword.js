import bcrypt from 'bcryptjs';

async function testPassword() {
    const hashedPassword = '$2a$10$ct9yGlVoTsZ3a5qBbzXqAuXU4vv2YH4kEJIZk4ea7Isr611lSTHqK';

 
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    console.log('Password match:', isMatch);
}

testPassword();

