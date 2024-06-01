import { useState } from "react";
import axios from "axios";
import "./TaskForm.css"
const TaskForm = ({ task, fetchTasks, setIsEditing }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task) {
      try {
        await axios.put(`http://localhost:3000/tasks/${task.id}`, {
          title,
          description,
          status,
          dueDate,
        });
        fetchTasks();
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating task", error);
      }
    } else {
      try {
        await axios.post("http://localhost:3000/tasks", {
          title,
          description,
          status,
          dueDate,
        });
        fetchTasks();
        setTitle("");
        setDescription("");
        setStatus("");
        setDueDate("");
      } catch (error) {
        console.error("Error creating task:", error);
      }
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">pending</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
        </select>
        <input
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">{task ? "Update" : "Add Task"}</button>
      </form>
      {task && <button onClick={() => setIsEditing(false)}>Cancel</button>}
    </div>
  );
};

export default TaskForm;
