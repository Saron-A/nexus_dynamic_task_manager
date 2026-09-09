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

    // we create a new object so that react will know there has been a change (react only detects change when the memory address has change not the contents)
    const newTaskObject = {
      id: crypto.randomUUID(),
      name: e.target.value,
      isCompleted: false,
    };

    setNewTask(newTaskObject);
    setTasks([...tasks, newTask]);
    console.log("new task: ", newTask);

    // empty the input field
    setNewTask({ id: "", name: "", isCompleted: false });
  };
  console.log("tasks: ", tasks);
  return (
    <div className="sub-container">
      <h2>Task Form</h2>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="newTask"
          name="newTask"
          placeholder="Add Task"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default TaskForm;
