const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../tasks.json");

const readTasks = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

const writeTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

exports.getTasks = (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
};

exports.addTask = (req, res) => {
  const { title, description } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }

  const tasks = readTasks();

  const newTask = {
    id: Date.now(),
    title,
    description: description || "",
    status: "Pending",
    created_at: new Date()
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json(newTask);
};

exports.toggleTask = (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === Number(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.status = task.status === "Pending" ? "Completed" : "Pending";
  writeTasks(tasks);

  res.json(task);
};

exports.deleteTask = (req, res) => {
  let tasks = readTasks();
  tasks = tasks.filter(t => t.id !== Number(req.params.id));
  writeTasks(tasks);

  res.json({ message: "Task deleted" });
};
