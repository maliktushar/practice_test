// backend/models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    domain: String,
    experience: String,
    question: String,
    options: [String],
    answer: String
});

module.exports = mongoose.model('Question', questionSchema);
