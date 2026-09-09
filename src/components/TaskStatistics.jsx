import "../styles/taskStatistics.css";

const TaskStatistics = ({ tasks }) => {
  const totalTaskCount = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <div className="sub-container2">
      <div className="allTasks">
        <p>Total Tasks Assigned</p>
        <h3>{totalTaskCount}</h3>
      </div>
      <div className="completedTasks">
        <p>Completed Tasks</p>
        <h3>{completedTasks.length}</h3>
      </div>
    </div>
  );
};

export default TaskStatistics;
