const TaskFilter = ({ tasks }) => {
  return (
    <>
      {tasks.length !== 0 ? (
        <>
          {/* Have different filters - All task, Completed Tasks and Not completed tasks */}

          <div className="allTasks">
            <h2>All Tasks</h2>
            <ul>
              {tasks.map((allTask) => (
                <li key={allTask.id}>
                  <h3>{allTask.name}</h3>
                  <p>{allTask.isCompleted ? "✅" : "❌"}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="completedTasks">
            <h2>Completed Tasks</h2>
            <ul>
              {tasks
                .filter((cTask) => cTask.isCompleted)
                .map((cTask) => (
                  <li key={cTask.id}>
                    <h3>{cTask.name}</h3>
                    <p>✅</p>
                  </li>
                ))}
            </ul>
          </div>

          <div className="inCompleteTasks">
            <h2>Incomplete Tasks</h2>
            {tasks
              .filter((iTask) => !iTask.isCompleted)
              .map((iTask) => (
                <li key={iTask.id}>
                  <h3>{iTask.name}</h3>
                  {/* <p>❌</p> */}
                </li>
              ))}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TaskFilter;
