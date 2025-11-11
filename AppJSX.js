// 🌟 React JSX Example — Day 5 (Web Dev with Shree)

import React from "react";

function AppJSX() {
  const userName = "Anil Sidhu";
  let x = 20;
  let y = 30;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ color: "#61dafb" }}>React JSX Example</h2>
      <h3>{userName}</h3>
      <h3>{10 + 20 + 30}</h3>
      <h3>{x * y}</h3>
      <button
        onClick={() => alert("Hello")}
        style={{
          backgroundColor: "#61dafb",
          color: "#000",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Click
      </button>
    </div>
  );
}

export default AppJSX;
