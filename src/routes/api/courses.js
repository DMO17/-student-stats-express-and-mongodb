const { Router } = require("express");

const {
  getAllCourses,
  getCourseById,
  createACourse,
  updateACourseById,
  deleteCourseById,
} = require("../../controller/api/courses");

const router = Router();

router.get("/", getAllCourses);
router.get("/:courseId", getCourseById);
router.post("/", createACourse);
router.put("/:courseId", updateACourseById);
router.delete("/:courseId", deleteCourseById);

module.exports = router;
