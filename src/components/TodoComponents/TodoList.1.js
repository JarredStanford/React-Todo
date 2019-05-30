import React from "react";

import { data } from "../data";
import Student from "./Student";

class HogwartsStudents extends React.Component {
  constructor() {
    super();
    this.state = {
      studentData: data,
      name: "",
      identity: "",
      image: "",
      age: "",
      bestFriend: ""
    };
  }

  addStudent = e => {
    e.preventDefault();
    // immutability in react/javascript
    const newStudent = {
      name: this.state.name,
      identity: this.state.identity,
      img: this.state.image,
      age: this.state.age,
      bestFriend: this.state.bestFriend
    };
    this.setState({
      studentData: [...this.state.studentData, newStudent], //newArray with an added student
      name: "",
      identity: "",
      age: "",
      image: "",
      bestFriend: ""
    });
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // render is called at the when the component first "mounts"
  // and everytime setState is called - no matter what
  render() {
    console.log(this.state.name);
    return (
      <div>
        <h1>Hogwarts Students:</h1>

        <div className="class-list">
          {this.state.studentData.map(studentFromMap => (
            <Student studentOnProps={studentFromMap} />
          ))}
        </div>

        <form onSubmit={this.addStudent}>
          {/* Event - onChange */}
          <input
            placeholder="Name"
            onChange={this.handleChanges}
            value={this.state.name}
            name="name"
          />

          <input
            placeholder="Identity"
            onChange={this.handleChanges}
            value={this.state.identity}
            name="identity"
          />

          <input
            placeholder="Image"
            onChange={this.handleChanges}
            value={this.state.image}
            name="image"
          />

          <input
            placeholder="Age"
            onChange={this.handleChanges}
            value={this.state.age}
            name="age"
          />

          <input
            placeholder="Best Friend"
            onChange={this.handleChanges}
            value={this.state.bestFriend}
            name="bestFriend"
          />

          {/* Event Handler - onClick */}
          <button>Add Student</button>
        </form>
      </div>
    );
  }
}

export default HogwartsStudents;

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

<TodoList tasks={this.state.taskData} />

class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.addToDo}>
        <input
          placeholder="Task"
          onChange={this.handleChanges}
          value={this.props.task}
          name="task"
        />
        <button>Add Task</button>
        <button>Clear Input</button>
      </form>
    );
  }
}