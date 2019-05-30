import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.add}>
        <input
          placeholder="Task"
          onChange={this.props.handle}
          value={this.props.task}
          name="task"
        />
        <button>Add Task</button>
        <button>Clear Input</button>
      </form>
    );
  }
}
export default TodoForm;
