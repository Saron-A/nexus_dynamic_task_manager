import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

const App = () => {
  // make this an array of tasks
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskFilter tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default App;
