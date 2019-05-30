import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskData: [
        {
          task: "Organize Garage",
          id: Date.now(),
          completed: false
        },
        {
          task: "Bake Cookies",
          id: Date.now(),
          completed: false
        }
      ],
      task: "",
      id: "",
      completed: ""
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
        <TodoList tasks={this.state.taskData} />
        <TodoForm
          add={this.addTask}
          handle={this.handleChanges}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;
