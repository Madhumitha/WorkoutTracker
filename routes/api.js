const router = require("express").Router();
const db = require("../models");
const path = require("path");

// Middleware

// GET requests
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).sort({day:-1}).limit(1)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

// POST request
router.post("/api/workouts", (req, res) => {

    let workoutData = req.body;

    db.Workout.create({
       day: new Date().setDate(new Date().getDate()) 
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

// PUT request
router.put("/api/workouts/:id", (req, res) => {

    let urlData = req.params;
    let data = req.body;
    
    db.Workout.updateOne(
        {_id: urlData.id},
        {$push: {exercises: [
            {
                "type" : data.type,
                "name" : data.name,
                "duration" : data.duration,
                "distance" : data.distance,
                "weight" : data.weight,
                "reps" : data.reps,
                "sets" : data.sets
            }
        ]
    }})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'stats.html'))
});

module.exports = router;


