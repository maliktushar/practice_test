// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const questionsRoute = require('./routes/questions');
const app = express();

const PORT = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/mcq").then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error:', error);
} );

app.use(cors());
app.use(express.json());
app.use('/api/questions', questionsRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
