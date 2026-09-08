import React from "react";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.length !== 0 ? (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              <h3>{t.name}</h3>
              {t.isCompleted ? "✅" : "Not Completed"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Tasks yet.</p>
      )}
    </div>
  );
};

export default TaskList;
