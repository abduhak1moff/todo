import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";
import UnDoneTodo from "../UnDoneTodo/UnDoneTodo";
import DoneTodo from "../DoneTodo/DoneTodo";
import { Col, Row } from "react-bootstrap";

export class Todo extends Component {
  render() {
    const todos = [
      {
        id: 1,
        title: "Reading books",
        done: false,
      },
      {
        id: 2,
        title: "Playing fotball",
        done: false,
      },
      {
        id: 3,
        title: "Listen to Quran",
        done: true,
      },
    ];

    const doneItem = todos.filter((todo) => todo.done);
    const undoneItem = todos.filter((todo) => !todo.done);
    console.log(undoneItem);
    return (
      <div className="container">
        <h1 className="fw-bold fs-12 text-center">Todo App</h1>
        <TodoForm />

        <Row>
          <Col xs={6}>
            {" "}
            {undoneItem.map((todo, i) => (
              <UnDoneTodo key={i} {...todo} />
            ))}
          </Col>
          <Col xs={6}>
            {" "}
            {doneItem.map((todo, i) => (
              <DoneTodo key={i} {...todo} />
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Todo;
