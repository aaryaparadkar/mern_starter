const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// GET all workout
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

// POST a new workout
router.post('/', (req, res) => {
    const {title, reps, load} = req.body
    try {
        const workout = Workout
    } catch (error) {
        
    }
    res.json({mssg: 'POST a new workout'})
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a workout"})
})

module.exports = router