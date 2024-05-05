import React, { Component } from "react";

export class DoneTodo extends Component {
  render() {
    const { title, id } = this.props;
    return (
      <div className="alert alert-danger d-flex align-items-center justify-content-between">
        <h3>{title}</h3>

        <button className="btn btn-danger">Delete</button>
      </div>
    );
  }
}

export default DoneTodo;
