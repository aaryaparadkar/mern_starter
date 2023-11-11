const mongoose = require('mongoose')

const Schema = mongoose.Schema

// created schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        reuired: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

// creating a model based on the schema
module.exports = mongoose.model('Workout', workoutSchema)