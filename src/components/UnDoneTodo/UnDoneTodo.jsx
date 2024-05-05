import React, { Component } from "react";

export class UnDoneTodo extends Component {
  render() {
    const { title, id, doneTodo, editTodo } = this.props;
    return (
      <div className="alert alert-info d-flex align-items-center justify-content-between">
        <h3>{title}</h3>
        <div>
          <button
            className="btn btn-success me-3"
            onClick={(e) => editTodo(id)}
          >
            Edit
          </button>
          <button className="btn btn-primary" onClick={(e) => doneTodo(id)}>
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default UnDoneTodo;
