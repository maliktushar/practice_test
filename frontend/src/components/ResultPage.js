// frontend/src/components/ResultPage.js
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ResultPage = ({ score, totalQuestions }) => {
    const percentage = (score / totalQuestions) * 100;

    return (
        <div style={{ width: '200px', margin: 'auto' }}>
            <h1>Your Score</h1>
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
    );
};

export default ResultPage;
