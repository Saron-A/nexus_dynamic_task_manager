// import { useState } from "react";

const TaskList = ({ tasks, setTasks }) => {
  //   const [checkTask, setCheckTask] = useState({
  //     id: "",
  //     isChecked: false,
  //   });
  //   // find the task by its id then change its isCompleted status to true
  //   if (checkTask.isChecked) {
  //     const checkedTask = tasks.find((task) => task.id.includes(checkTask.id));
  //     console.log(checkedTask);

  //     const updatedCheckedTask = {
  //       ...checkedTask,
  //       isCompleted: true,
  //     };

  //     // we need to find the task with that id and replace it with the updatedCheckedTask
  //     const updateTasksWithUpdatedInfo = tasks.map((task) =>
  //       task.id === updatedCheckedTask.id ? updatedCheckedTask : task,
  //     );
  //     setTasks(updateTasksWithUpdatedInfo);
  //   }

  const handleDelete = (task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id); // create an array of tasks other than the deleted task
    setTasks(updatedTasks);
  };

  return (
    <div>
      {tasks.length !== 0 ? (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              <h3>{t.name}</h3>
              {t.isCompleted ? (
                "✅"
              ) : (
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  onChange={() =>
                    setTasks(
                      tasks.map((task) =>
                        task.id === t.id
                          ? { ...task, isCompleted: true }
                          : task,
                      ),
                    )
                  }
                />
              )}
              <button onClick={() => handleDelete(t)}>Delete</button>
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
