const TaskStatistics = ({ tasks }) => {
  const totalTaskCount = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <>
      <div className="allTasks">
        <p>Total Tasks Assigned</p>
        <h2>{totalTaskCount}</h2>
      </div>
      <div className="completedTasks">
        <p>Completed Tasks</p>
        <h2>{completedTasks.length}</h2>
      </div>
    </>
  );
};

export default TaskStatistics;
