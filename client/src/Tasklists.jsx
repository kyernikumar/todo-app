import axios from "axios";

const Tasklists = ({ taskList, fetchTasks }) => {
  const handleTaskDone = (id, done) => {
    axios
      .put(`http://localhost:3001/update/${id}`, { done: !done })
      .then((res) => {
        console.log(res.data);
        fetchTasks();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchTasks();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='w-full flex flex-col my-10'>
      {taskList.map((task) => (
        <div
          key={task._id}
          className='h-10 flex items-center gap-3 bg-amber-400 my-1 p-1 rounded-xl'
        >
          <input
            type='checkbox'
            checked={task.done || false}
            onChange={() => handleTaskDone(task._id, task.done)}
          />
          <span className={`grow ${task.done ? "line-through" : ""}`}>
            {task.task}
          </span>
          <button
            onClick={() => handleDelete(task._id)}
            className='bg-red-500 text-white px-2 py-1 rounded'
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasklists;
