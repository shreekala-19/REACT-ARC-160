import React from "react";

function FunctionInJSX() {
  function fruit() {
    return "Apple";
  }

  return <h1>{fruit()}</h1>;
}

export default FunctionInJSX;
