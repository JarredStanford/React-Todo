import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.taskOnProps.task}</p>
      </div>
    );
  }
}

export default Todo;
