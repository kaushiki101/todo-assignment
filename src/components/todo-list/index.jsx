import React from "react";
import "./style.css";

export function ToDoList({ allTaskList, setOpenTaskId }) {
  return (
    <div className="TodoListContainer">
      {allTaskList.map((task) => (
        <div
          className="task"
          key={task.id}
          onClick={() => setOpenTaskId(task.id)}
        >
          {task.title}
        </div>
      ))}
    </div>
  );
}
