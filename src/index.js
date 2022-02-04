const express = require("express");

const routes = require("./routes");

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async () => {
  app.listen(PORT, () =>
    console.log(`server running at http://localhost:${PORT}`)
  );
};

init();
