import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList.js";

function App() {
  const [usersList, setusersList] = useState([]);

  const addUserHandler = (uName, uAge, uId) => {
    console.log(uId);
    setusersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: uId }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
