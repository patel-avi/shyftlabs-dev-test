const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();
require("./config/database");

const app = express();
app.use(
  cors({
    origin: "https://shyftlabs-dev-test-kc8t.onrender.com",
  })
);

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/students", require("./routes/students"));
app.use("/api/courses", require("./routes/courses"));
app.use("/api/results", require("./routes/results"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
