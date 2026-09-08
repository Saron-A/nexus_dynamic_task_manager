import { useState } from "react";

const TaskForm = () => {
  const [task, setTask] = useState({ name: "", isCompleted: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  return (
    <div>
      <h1>Task Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          id="task"
          name="task"
          value={task.name}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default TaskForm;
