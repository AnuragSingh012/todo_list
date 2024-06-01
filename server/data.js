import { v4 as uuidv4 } from "uuid";

let tasks = [
  {
    id: uuidv4(),
    title: "Task 2",
    description: "Buy groceries",
    status: "in-progress",
    dueDate: "30/05/2024",
  },
  {
    id: uuidv4(),
    title: "Task 3",
    description: "Finish report",
    status: "pending",
    dueDate: "31/05/2024",
  },
];

export { tasks };
