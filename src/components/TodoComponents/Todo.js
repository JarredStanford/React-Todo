import React from "react";

const Todo = props => {
  return (
    <div>
      <p>{props.taskOnProps.task}</p>
    </div>
  );
};

export default Todo;
