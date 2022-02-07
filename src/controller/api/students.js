const { Student } = require("../../models");

const getAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.find({});

    return res.json({ success: true, data: allStudents });
  } catch (error) {
    console.log(`[ERROR]: Failed to get students | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get students" });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;
    const singleStudent = await Student.findById(studentId);

    if (!singleStudent) {
      console.log("[ERROR]: No student with that ID exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to get student" });
    }

    return res.json({ success: true, data: singleStudent });
  } catch (error) {
    console.log(`[ERROR]: Failed to get student | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get student" });
  }
};

const createAStudent = async (req, res) => {
  try {
    const { firstName, lastName, githubUrl } = req.body;

    const createStudent = await Student.create({
      firstName,
      lastName,
      githubUrl,
    });

    return res.json({ success: true, data: createStudent });
  } catch (error) {
    console.log(`[ERROR]: Failed to to create student | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create student" });
  }
};

const updateAStudentById = (req, res) => {};

const deleteStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;
    const singleStudent = await Student.findByIdAndDelete(studentId);

    if (!singleStudent) {
      console.log("[ERROR]: No student with that ID exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to delete student" });
    }

    return res.json(singleStudent);
  } catch (error) {
    console.log(`[ERROR]: Failed to get student | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get student" });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createAStudent,
  updateAStudentById,
  deleteStudentById,
};
