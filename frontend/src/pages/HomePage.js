// frontend/src/pages/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    
    const navigate = useNavigate();

    const handleStart = () => {
        navigate(`/setup?Fname=${Fname}&Lname=${Lname}`);
    };

    return (
        <div>
            <h1>Welcome to the Practice Test</h1>
            <input
                type="text"
                placeholder="Enter your first name"
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
                />
                <input
                type="text"
                placeholder="Enter your last name"
                value={Lname}
                onChange={(e) => setLname(e.target.value)}
            />
            <button onClick={handleStart} disabled={!Fname && !Lname}>
                Take a Practice Test
            </button>
        </div>
    );
};

export default HomePage;
