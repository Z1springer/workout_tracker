const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  weight: {
    type: String,
  },
  sets: {
    type: String,
  },
  reps: {
    type: String,
  },
  duration: {
    type: String,
  },
  distance: {
    type: String,
  },
});

const Exercise = mongoose.model("Exercise", ExSchema);

module.exports = Exercise;
