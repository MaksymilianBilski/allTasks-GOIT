import Task from '../Task/Task';

const TasksList = ({ tasks }) => {
  return (
    <div>
      <h3>Task list</h3>
      <ul>
        <Task />
      </ul>
    </div>
  );
};

export default TasksList;
