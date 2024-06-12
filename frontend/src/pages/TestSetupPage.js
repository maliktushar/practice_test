// frontend/src/pages/TestSetupPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TestSetupPage = () => {
    const [domain, setDomain] = useState('');
    const [experience, setExperience] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const Fname = queryParams.get('Fname');
    const Lname = queryParams.get('Lname');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming you want to navigate to the /test route with query parameters
        navigate(`/test?domain=${domain}&experience=${experience}&Fname=${Fname}&Lname=${Lname}`);
    };

    return (
        <div>
            <h1>Setup Your Practice Test</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Domain:
                        <select value={domain} onChange={(e) => setDomain(e.target.value)}>
                            <option value="">Select Domain</option>
                            <option value="web development">Web Development</option>
                            <option value="data science">Data Science</option>
                            <option value="machine learning">Machine Learning</option>
                            <option value="Gen AI">Gen AI</option>
                            <option value="cybersecurity">Cyber Security</option>
                            <option value="blockchain">Blockchain</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Experience:
                        <select value={experience} onChange={(e) => setExperience(e.target.value)}>
                            <option value="">Select Experience Level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Start Test</button>
            </form>
        </div>
    );
};

export default TestSetupPage;
