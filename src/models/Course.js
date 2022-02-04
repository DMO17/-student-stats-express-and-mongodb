const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
    maxLength: 100,
  },
  inPerson: {
    type: Boolean,
    default: true,
  },
  startDate: {
    type: Date,
    default: moment(),
  },
  endDate: {
    type: Date,
    default: moment().add(12, "weeks"),
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "student",
    },
  ],
});

const Course = model("course", courseSchema);

module.exports = Course;
