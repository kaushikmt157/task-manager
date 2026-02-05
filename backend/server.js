const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ADD task
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: Date.now(),
    title,
    description: description || "",
    status: "Pending",
    created_at: new Date()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// MARK completed
app.put("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.status = "Completed";
  res.json(task);
});

// DELETE task (bonus)
app.delete("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== taskId);
  res.json({ message: "Task deleted" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
