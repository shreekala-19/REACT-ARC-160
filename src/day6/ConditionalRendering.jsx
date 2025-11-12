import React from "react";
function ConditionalRendering() {
  const name = "Anil Sidhu";

  return (
    <div>
      <h2>{name ? name : "User not Found"}</h2>
    </div>
  );
}

export default ConditionalRendering;
