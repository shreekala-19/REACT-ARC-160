import React from "react";
function CurlyBraces() {
  const name = "Anil Sidhu";
  let x = 10;
  let y = 20;

  return (
    <div>
      <h1>JSX with Curly Braces</h1>
      <h2>{name}</h2>
      <h1>{x + y}</h1>
    </div>
  );
}

export default CurlyBraces;
