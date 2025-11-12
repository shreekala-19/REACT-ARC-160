import React from "react";

function OperationsInJSX() {
  function operation(a, b, op) {
    if (op === "+") return a + b;
    else if (op === "-") return a - b;
    else return a * b;
  }

  return (
    <div>
      <h1>{operation(20, 10, "-")}</h1>
      <h1>{operation(20, 10, "+")}</h1>
      <h1>{operation(20, 10, "")}</h1>
    </div>
  );
}

export default OperationsInJSX;
