import React, { useState } from "react";
import "./mouse.css";

const Mouse = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleMouseEnter = (e) => {
    setBackgroundColor("red");
  };
  const handleMouseLeave = (e) => {
    setBackgroundColor("white");
  };

  return (
    <div>
      <h1>Check components/Mouse.js file</h1>
      <p>
        Using onMouseEnter events make the square below red when user hovers it.
        And using onMouseLeave turn it back to normal.
      </p>
      <div
        className="box"
        style={{ backgroundColor: backgroundColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
    </div>
  );
};

export default Mouse;
