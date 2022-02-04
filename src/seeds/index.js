const mongoose = require("mongoose");
const { Student, Course } = require("../models");

const students = require("./data/student");
const courses = require("./data/course");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/studentStatsDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Successfully Connected to the database");

    // Bulk create students in student document

    await Student.deleteMany({});
    await Student.insertMany(students);

    console.log("[INFO]: Students data has been seeded in the mongoDB");

    // bulk create courses document

    const studentsDataFromDb = await Student.find({});

    studentsDataFromDb.forEach((student) => {
      const studentId = student._id.toString();

      const randomCourse = courses[Math.floor(Math.random() * courses.length)];

      randomCourse.students.push(studentId);
    });

    await Course.deleteMany({});
    await Course.insertMany(courses);

    console.log("[INFO]: Courses data has been seeded in the mongoDB");

    await mongoose.disconnect();
  } catch (error) {
    console.log(
      `[Error]: Connection to the Database has failed | ${error.message}`
    );
  }
};

init();
