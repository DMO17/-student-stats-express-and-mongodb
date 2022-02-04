const { Schema } = require("mongoose");
const moment = require("moment");

const assignmentSchema = new Schema({
  assignmentId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  assignmentName: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  createdAt: {
    type: Date,
    default: moment(),
  },
});

module.exports = assignmentSchema;
