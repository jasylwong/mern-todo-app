import React, { Component } from "react";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_descriptions: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    }
  }

  onChangeToDoDescription(e) {
    this.setState({
      todo_description: e.target.value
    })
  }
  render() {
    return (
      <div>
        <p>Welcome to Create Todo component!</p>
      </div>
    );
  }
}