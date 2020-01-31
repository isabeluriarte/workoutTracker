const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Type is Required"
            },
            name: {
                type: String,
                required: "Name is Required"
            },
            duration: {
                type: Number,
                required: "Duration is Required"
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

//name, type, weight, sets, reps, my distance traveled.