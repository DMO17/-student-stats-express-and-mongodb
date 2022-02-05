const { Course } = require("../../models");

const getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find({}).populate("students");

    return res.json({ success: true, data: allCourses });
  } catch (error) {
    console.log(`[ERROR]: Failed to get courses | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get courses" });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    const singleCourse = await Course.findById(courseId).populate("students");

    if (!singleCourse) {
      console.log("[ERROR]: No Course with that ID exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to get course" });
    }

    return res.json({ success: true, data: singleCourse });
  } catch (error) {
    console.log(`[ERROR]: Failed to get course | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get course" });
  }
};

const createACourse = async (req, res) => {
  try {
    const { courseName } = req.body;
    const course = await Course.create({ courseName });
    return res.json({ success: true, data: course });
  } catch (error) {
    console.log(`[ERROR]: Failed to create course | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create course" });
  }
};

const updateACourseById = (req, res) => {
  res.send("get all courses");
};

const deleteCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;

    const singleCourse = await Course.findByIdAndDelete(courseId);

    if (!singleCourse) {
      console.log("[ERROR]: No course with that ID exists");
      return res
        .status(400)
        .json({ success: false, message: "Failed to delete course" });
    }

    return res.json(singleCourse);
  } catch (error) {
    console.log(`[ERROR]: Failed to get course | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get course" });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createACourse,
  updateACourseById,
  deleteCourseById,
};
