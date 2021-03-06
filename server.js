const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//SEED DATA==============================================================

const seedExorcises = [
  {
    name: "Push-ups",
    type: "Upper-body",
    weight: "N/A",
    sets: 5,
    reps: 10,
    duration: "20 min",
    distance: "around the corner",
  },
  {
    name: "Mountain Climbers",
    type: "Lower-body",
    weight: "N/A",
    sets: 3,
    reps: 20,
    duration: "15 min",
    distance: "not far enough",
  },
  {
    name: "Jogging",
    type: "Cardio",
    weight: "N/A",
    sets: "N/A",
    reps: "10 Laps",
    duration: "30 min",
    distance: "too far",
  },
];

// Routes==================================================================
//front page
app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

//create page
app.get("/workout", (req, res) => {
  res.sendFile(__dirname + "/public/workout.html");
});

//view workouts
app.get("/workouts", (req, res) => {
  db.Workout.find({})
    .populate("exercise")
    .then((viewWO) => {
      res.json(viewWO);
    })
    .catch((err) => {
      res.json(err);
    });
});

//create workout
app.post("/api/workout", ({ body }, res) => {
  db.Workout.create(body)
    .then((createWO) => {
      console.log(createWO);
      res.json(createWO);
    })
    .catch(({ message }) => {
      console.log(message);
      res.status(500).json(message);
    });
});

//creates an exercise FOR a workout
app.post("/submit", (req, res) => {
  db.Exercise.create(req.body)
    .then(({ _id }) => {
      db.Workout.findByIdAndUpdate(req.body.id, {
        $push: { exercise: _id },
      }).then((updtWO) => {
        console.log(updtWO);
        res.json(updtWO);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
    });
});

//=============================================================================

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
