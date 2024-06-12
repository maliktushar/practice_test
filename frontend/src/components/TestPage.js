// frontend/src/components/TestPage.js
import React, { useEffect, useState } from 'react';
import { fetchQuestions } from '../api/api';
import Question from './Question';

const TestPageComponent = ({ domain, experience, onTestComplete }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [testComplete, setTestComplete] = useState(false);

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const response = await fetchQuestions({ domain, experience });
                setQuestions(response.data.slice(0, 10));
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        getQuestions();
    }, [domain, experience]);

    const handleAnswerSubmit = (selectedOption) => {
        if (questions[currentQuestionIndex].options[selectedOption] === questions[currentQuestionIndex].answer) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setTestComplete(true);
            onTestComplete(score + 1);
        }
    };

    const handleTimeUp = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setTestComplete(true);
            onTestComplete(score);
        }
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    if (testComplete) {
        return null;
    }

    return (
        <div>
            <Question
                question={questions[currentQuestionIndex]}
                onAnswerSubmit={handleAnswerSubmit}
                onTimeUp={handleTimeUp}
            />
        </div>
    );
};

export default TestPageComponent;
