const { Schema, model } = require("mongoose");
const assignmentSchema = require("./Assignment");

const studentSchema = {
  firstName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  githubUrl: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/i.test(
          v
        );
      },
      message: (props) =>
        `${props.value} | this is an incorrect format for github profile url`,
    },
  },

  assignments: [assignmentSchema],
};

const schema = new Schema(studentSchema);
const Student = model("student", schema);

module.exports = Student;
