const { Schema, model } = require("mongoose");

const courseSchema = {};

const schema = new Schema(courseSchema);
const Course = model("course", schema);

module.exports = Course;
