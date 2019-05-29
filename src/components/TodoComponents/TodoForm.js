import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          placeholder="Task"
          onChange={this.handleChanges}
          value={this.task}
          name="task"
        />
      </form>
    );
  }
}

export default TodoForm;
