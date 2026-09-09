import { useState } from "react";
import "../styles/taskForm.css";

const TaskForm = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({
    id: "",
    name: "",
    isCompleted: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTaskObject = {
      id: crypto.randomUUID(),
      name: newTask.name,
      isCompleted: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObject]);

    setNewTask({
      id: "",
      name: "",
      isCompleted: false,
    });
  };

  return (
    <div className="sub-container">
      <h2>Task Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="newTask"
          name="newTask"
          placeholder="Add Task"
          value={newTask.name}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              name: e.target.value,
            })
          }
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
