import React, { useState } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import "./TaskItem.css"

const TaskItem = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${task.id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      {isEditing ? (
        <TaskForm task={task} fetchTasks={fetchTasks} setIsEditing={setIsEditing} />
      ) : (
        <li>
          <div className="item">
            <h2>{`Title: ${task.title}`}</h2>
            <p>{`Description: ${task.description}`}</p>
            <p>{`status: ${task.status}`}</p>
            <p>{`Due Date: ${task.dueDate}`}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={deleteTask}>Delete</button>
          </div>
        </li>
      )}
    </>
  );
};

export default TaskItem;
