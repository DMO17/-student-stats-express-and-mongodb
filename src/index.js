// const express = require("express");
// const mongoose = require("mongoose");

// const routes = require("./routes");

// const PORT = process.env.PORT || 4000;

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(routes);

// const init = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/studentStatsDb", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("[INFO]: Successfully Connected to the database");

//     app.listen(PORT, () =>
//       console.log(`Server running on http://localhost:${PORT}`)
//     );
//   } catch (error) {
//     console.log(
//       `[Error]: Connection to the Database has failed | ${error.message}`
//     );
//   }
// };

// init();
