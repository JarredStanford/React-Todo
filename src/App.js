import React from "react";
import { tasks } from "./components/TodoComponents/data";
//import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";

import "./App.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskData: tasks,
      task: "",
      completed: false,
      ID: ""
    };
  }

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: this.state.completed
    };
    this.setState({
      taskData: [...this.state.taskData, newTask],
      task: "",
      id: Date.now(),
      completed: ""
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <div>
          {this.state.taskData.map(task => (
            <Todo taskOnProps={task} />
          ))}
        </div>
        <form onSubmit={this.addTask}>
          <input
            placeholder="Task"
            onChange={this.handleChanges}
            value={this.state.task}
            name="task"
          />
          <button>Add Task</button>
          <button>Clear Input</button>
        </form>
      </div>
    );
  }
}

export default App;
