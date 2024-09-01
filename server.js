const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/health_monitoring', { useNewUrlParser: true, useUnifiedTopology: true });

// Health Data Model
const HealthData = require('./models/HealthData');

// Route to post health data
app.post('/api/healthdata', (req, res) => {
    const newData = new HealthData(req.body);
    newData.save()
        .then(data => res.status(201).send(data))
        .catch(err => res.status(400).send(err));
});

// Route to get health data
app.get('/api/healthdata/:userId', (req, res) => {
    HealthData.find({ userId: req.params.userId })
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err));
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
