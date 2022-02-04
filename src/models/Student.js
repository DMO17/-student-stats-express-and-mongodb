const { Schema, model } = require("mongoose");

const studentSchema = {
  firstName: {
    type: String,
    require: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    require: true,
    maxLength: 50,
  },
  githubUrl: {
    type: String,
    require: true,
    maxLength: 50,
  },
};

const schema = new Schema(studentSchema);
const Student = model("student", schema);

module.exports = Student;
