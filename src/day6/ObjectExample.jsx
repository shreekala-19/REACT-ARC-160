import React from "react";

function ObjectExample() {
  const userObj = {
    name: "Anil Sidhu",
    email: "anil@test.com",
    age: 29,
  };

  return (
    <div>
      <h1>{userObj.name}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userObj.age}</h1>
    </div>
  );
}

export default ObjectExample;
