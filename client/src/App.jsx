import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Tasklists from "./Tasklists";
import axios from "axios";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const fetchTasks = () => {
    axios
      .get("http://localhost:3001")
      .then((res) => setTaskList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <div className='my-30'>
        <CreateTask fetchTasks={fetchTasks} />
        <Tasklists taskList={taskList} fetchTasks={fetchTasks} />
      </div>
    </div>
  );
};

export default App;
