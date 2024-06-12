// frontend/src/pages/TestPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TestPageComponent from '../components/TestPage';

const TestPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const domain = queryParams.get('domain');
    const experience = queryParams.get('experience');
    const Fname = queryParams.get('Fname');
    const Lname = queryParams.get('Lname');

    const handleTestComplete = (finalScore) => {
        navigate(`/result?score=${finalScore}&Fname=${Fname}&Lname=${Lname}`);
    };

    return (
        <div>
            <h1>Test Page</h1>
            <TestPageComponent
                domain={domain}
                experience={experience}
                onTestComplete={handleTestComplete}
            />
        </div>
    );
};

export default TestPage;
