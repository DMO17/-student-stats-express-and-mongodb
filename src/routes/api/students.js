const { Router } = require("express");

const assignments = require("./assignments");

const {
  getAllStudents,
  getStudentById,
  createAStudent,
  updateAStudentById,
  deleteStudentById,
} = require("../../controller/api/students");

const router = Router();

router.get("/", getAllStudents);
router.get("/:studentId", getStudentById);
router.post("/", createAStudent);
router.get("/:studentId", updateAStudentById);
router.get("/:studentId", deleteStudentById);

router.use("/studentId/assignments", assignments);

module.exports = router;
