// backend/controllers/questionsController.js
const fs = require('fs');
const path = require('path');

exports.getQuestions = async (req, res) => {
    const { domain, experience } = req.query;
    try {
        const questionsFilePath = path.join(__dirname, '../data/questions.json');
        const questionsData = fs.readFileSync(questionsFilePath);
        const questions = JSON.parse(questionsData);

        const filteredQuestions = questions.filter(
            (q) => q.domain === domain && q.experience === experience
        );

        const randomQuestions = filteredQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);

        res.json(randomQuestions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
