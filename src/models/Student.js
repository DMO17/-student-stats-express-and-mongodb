const { Schema, model } = require("mongoose");

const studentSchema = {};

const schema = new Schema(studentSchema);
const Student = model("student", schema);

module.exports = Student;
