import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./App.css";

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
          id: 123452367437,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 134665775868,
          completed: false
        }
      ],
      task: ""
    };
  }

  addTask = e => {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskData: [...this.state.taskData, newTask],
      task: ""
    });
  };

  removeTask = e => {
    e.preventDefault();
    this.setState({
      taskData: this.state.taskData.filter(task => task.completed !== true)
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleItem = id => {
    this.setState(prevState => {
      return {
        taskData: prevState.taskData.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed
            };
          } else {
            return task;
          }
        })
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList tasks={this.state.taskData} toggleItem={this.toggleItem} />
        <TodoForm
          add={this.addTask}
          handle={this.handleChanges}
          task={this.state.task}
          remove={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
