// frontend/src/pages/ResultPage.js
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const score = parseInt(queryParams.get('score'), 10);
    const Fname = queryParams.get('Fname');
    const Lname = queryParams.get('Lname');
    const totalQuestions = 10; // Assuming there are 10 questions
    const percentage = (score / totalQuestions) * 100;

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Your Score</h1>
            <div style={{ width: '200px', margin: 'auto' }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage.toFixed(2)}%`}
                    styles={buildStyles({
                        textSize: '16px',
                        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                />
            </div>
            <div id="certificate" style={{ marginTop: '20px', padding: '20px', border: '1px solid black' }}>
                <h2>Certificate of Completion</h2>
                <p>This is to certify that</p>
                <h3>{Fname} {Lname}</h3>
                <p>has successfully completed the test with a score of {percentage.toFixed(2)}%</p>
            </div>
        </div>
    );
};

export default ResultPage;
