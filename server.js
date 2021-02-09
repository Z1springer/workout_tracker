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
});

db.Workout.create({ name: "Squats" })
  .then((dbExercise) => {
    console.log(dbExercise);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.post("/sumbit", ({ body }, res) => {
  db.Exercise.create(body)
    .then(({ _id }) =>
      db.Workout.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true })
    )
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});
//=============================================================================
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
