import React, { useEffect, useState } from "react";
import "./style.css";

export default function Editor({ openTaskId }) {
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    if (openTaskId === null) return;
    setCurrentTask(null);
    fetch("https://jsonplaceholder.typicode.com/todos/" + openTaskId)
      .then((r) => r.json())
      .then((data) => setCurrentTask(data))
      .catch(console.error);
  }, [openTaskId]);

  if (!openTaskId)
    return (
      <div className="Editor">
        <div>Please select the task</div>
      </div>
    );

  return (
    <div className="Editor">
      {currentTask ? (
        <div>
          <div>
            <strong>Title</strong> {currentTask.title}
          </div>
          <div className="button-container">
            <div className="button">Delete</div>
            {currentTask.completed && (
              <div className="button warn">Completed</div>
            )}
          </div>
        </div>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
}
