// frontend/src/components/Question.js
import React, { useEffect, useState } from 'react';

const Question = ({ question, onAnswerSubmit, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(300); // Timer set to 30 seconds
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeUp]);

    const handleOptionChange = (optionIndex) => {
        setSelectedOption(optionIndex);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAnswerSubmit(selectedOption);
    };

    return (
        <div >
            <p>{question.question}</p>
            <form onSubmit={handleSubmit}>
                <ul>
                    {question.options.map((option, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    value={index}
                                    checked={selectedOption === index}
                                    onChange={() => handleOptionChange(index)}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
                <button type="submit" disabled={selectedOption === null}>
                    Next Question
                </button>
            </form>
            <p>Time left: {timeLeft} seconds</p>
        </div>
    );
};

export default Question;
