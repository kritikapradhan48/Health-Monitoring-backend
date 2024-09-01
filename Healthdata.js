const mongoose = require('mongoose');

const HealthDataSchema = new mongoose.Schema({
    userId: String,
    heartRate: Number,
    steps: Number,
    sleepHours: Number,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HealthData', HealthDataSchema);
