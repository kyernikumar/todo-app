import axios from "axios";
import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const handleusers = () => {
    axios
      .post("http://localhost:3001/adduser", { name: name })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <div>{user && users.map((user) => <p>user.name</p>)}</div> */}
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleusers}>Get Users</button>
    </>
  );
};

export default Users;
