const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

app.use("/tasks", require("./routes/tasks"));

module.exports = app;
