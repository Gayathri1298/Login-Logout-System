import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../styles/LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });

           
            localStorage.setItem('token', response.data.token);

           
            if (response.data.role === 'Admin' || response.data.role === 'Super Admin') {
                navigate('/admin'); 
            } else {
                navigate('/dashboard'); 
            }

            console.log('Login successful');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
