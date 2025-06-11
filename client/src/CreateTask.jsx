import React, { useState } from "react";
import axios from "axios";

const CreateTask = ({ fetchTasks }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/addtask", { task: task })
      .then((res) => {
        console.log(res);
        setTask(""); // Clear input
        fetchTasks(); // Fetch new tasks after adding
      })
      .catch((err) => console.log(err));
  };

  return (
    <fieldset className='w-full space-y-1 dark:text-gray-800'>
      <div className='flex relative'>
        <input
          type='text'
          name='task'
          placeholder='Enter a Task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='flex flex-1 px-1 py-2 border sm:text-sm rounded-l-md focus:ring-inset dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600 '
        />
        <button
          onClick={handleSubmit}
          className='h-full w-15 sm:text-sm rounded-r-md dark:bg-gray-300 absolute right-0'
        >
          add
        </button>
      </div>
    </fieldset>
  );
};

export default CreateTask;
