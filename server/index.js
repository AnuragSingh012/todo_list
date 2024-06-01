import express from "express";
import { tasks } from "./data.js";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Show Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

//Show Tasks ById
app.get("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((task) => task.id === req.params.id);
  if (taskIndex === -1) {
    res.status(404).json({ error: "Task not found" });
  } else {
    res.json(tasks[taskIndex]);
  }
});

//Create Tasks
app.post("/tasks", (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const newTask = { id: uuidv4(), title, description, status, dueDate };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Edit Tasks
app.put("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((task) => task.id === req.params.id);
  if (taskIndex === -1) {
    res.status(404).json({ error: "Task not found" });
  } else {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json();
  }
});

app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((task) => task.id === req.params.id);
  if (taskIndex === -1) {
    res.status(404).json({ error: "Task not found" });
  } else {
    tasks.splice(taskIndex, 1);
    console.log("Deleted");
    res.sendStatus(204);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
