

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Super Admin', 'Admin', 'Manager', 'Normal User'],
        default: 'Normal User'
    }
});


export default mongoose.model('User', UserSchema);
