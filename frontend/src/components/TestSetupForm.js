// frontend/src/components/TestSetupForm.js
import React, { useState } from 'react';

const TestSetupForm = ({ onStartTest }) => {
    const [domain, setDomain] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onStartTest(domain, experience);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Domain:
                <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} />
            </label>
            <br />
            <label>
                Experience:
                <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} />
            </label>
            <br />
            <button type="submit">Start Test</button>
        </form>
    );
};

export default TestSetupForm;
