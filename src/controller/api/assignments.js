const { Student } = require("../../models");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const createAssignment = async (req, res) => {
  try {
    const { studentId } = req.params;

    const { assignmentName, score } = req.body;

    const assignmentId = uuidv4();

    const createdAt = moment();

    studentAssignment = {
      assignmentId,
      assignmentName: assignmentName,
      score: score,
      createdAt,
      _id: studentId,
    };

    // {$push: {friends: {firstName: "Harry", lastName: "Potter"}}}

    const filter = { _id: studentId };
    const assignments = { studentAssignment };

    const student = await Student.findByIdAndUpdate(studentId, {
      $push: { assignments },
    });

    console.log(studentAssignment);
    console.log(student);
    // student.assignments.push(studentAssignment);

    res.json({ success: true, data: student });
  } catch (error) {}
};

const deleteAssignment = (req, res) => {
  const { studentId, assignmentId } = req.params;
  console.log(studentId, assignmentId);

  res.send("delete assignemnt");
};

module.exports = { createAssignment, deleteAssignment };
