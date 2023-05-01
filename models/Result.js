const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema(
  {
    courseName: { type: String, required: true },
    studentName: { type: String, required: true },
    score: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);
