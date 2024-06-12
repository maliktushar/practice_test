import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import TestPage from './pages/TestPage';
import TestSetupPage from './pages/TestSetupPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/setup" element={<TestSetupPage />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </Router>
    );
};

export default App;
