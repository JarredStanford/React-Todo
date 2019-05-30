import React from "react";

const Todo = props => {
  return (
    <div
      className={`item ${props.taskOnProps.completed ? "toDid" : ""}`}
      onClick={() => props.toggleItem(props.taskOnProps.id)}
    >
      <p>{props.taskOnProps.task}</p>
    </div>
  );
};

export default Todo;
