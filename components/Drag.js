import React, { useState, useEffect } from "react";
import "./drag.css";

const Drag = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [source, setSource] = useState(["itemDrag"]);
  const [target, setTarget] = useState([]);

  const handleOnDragStart = (event) => {
    event.dataTransfer.setData("dragItem", event.target.id);
    setIsDragging(true);
  };
  const dragEnd = () => {
    setIsDragging(false);
  };

  const handleDragEnter = (event) => {
    //event.preventDefault();
    //event.stopPropagation();
    if (event.target.id === "target") {
      event.target.style.background = "#ffffcc";
    }
  };

  useEffect(() => {
    console.log("handleOnDrop: ", source, target);
  }, [source, target]);

  const handleDragLeave = (event) => {
    if (event.target.id === "target") {
      event.target.style.border = "6px solid red";
    }
  };

  const handleOnDrop = (event) => {
    event.preventDefault();
    const elemId = event.dataTransfer.getData("dragItem");
    setTarget([...target, elemId]);
    setSource(source.filter((item) => item !== elemId));
  };

  const handleOnOver = (event) => {
    event.preventDefault();
  };

  const styleOnDrag = {
    opacity: 0.3,
  };

  const element = source.map((id, index) => (
    <div
      id={id}
      style={isDragging ? styleOnDrag : {}}
      className="drag-item"
      draggable="true"
      onDrag={() => console.log("drag")}
      onDragStart={handleOnDragStart}
      onDragEnd={dragEnd}
      key={index}
    />
  ));

  return (
    <div>
      <h1>Check components/Drag.js file</h1>
      <p>
        Using onDrag onDragEnter and onDragLeave events move the orage square
        from one box to another
      </p>
      <div className="container">
        <div className="box" id="source">
          {element}
        </div>
        <div
          id="target"
          className="box"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleOnDrop}
          onDragOver={handleOnOver}
        >
          {target.map((id, index) => (
            <div
              id={id}
              style={isDragging ? styleOnDrag : {}}
              className="drag-item"
              onDragLeave={handleDragLeave}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drag;
