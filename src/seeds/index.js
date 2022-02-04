const mongoose = require("mongoose");
const { Student } = require("../models");
const students = require("./data/student");

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

    await mongoose.disconnect();
  } catch (error) {
    console.log(
      `[Error]: Connection to the Database has failed | ${error.message}`
    );
  }
};

init();
