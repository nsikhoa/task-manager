const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

// taskSchema.pre('save', function (next) {
//     const task = this

//     if (task.isModified('completed')) {
//         console.log('completed is modified!')
//     }

//     next()
// })

module.exports = Task;
