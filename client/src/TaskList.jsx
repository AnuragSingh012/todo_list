import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, fetchTasks }) => {
  return (
    <div>
      <ul className="list-container">
        {tasks.map((task) => (
          <TaskItem className="list-item" key={task.id} task={task} fetchTasks={fetchTasks} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
