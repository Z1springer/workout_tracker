const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WoSchema = new Schema({
  name: {
    type: String,
  },
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});

const Workout = mongoose.model("Workout", WoSchema);

module.exports = Workout;
