import axios from "axios";
import React, { useEffect, useState } from "react";

const Userslist = () => {
  const [users, setUsers] = useState({});
  const handleUsers = () => {
    axios
      .get("http://localhost:3001/getusers")
      .then((res) => console.log(res.data))
      .then((err) => console.log(err));
  };

  return (
    <>
      <div>
        {(users.length &&
          users.map((user) => <p key={user.name}>{user.name}</p>)) || (
          <p>no users</p>
        )}
      </div>
      <button onClick={handleUsers}>show users</button>
    </>
  );
};

export default Userslist;
