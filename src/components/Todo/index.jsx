import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";
import UnDoneTodo from "../UnDoneTodo/UnDoneTodo";
import DoneTodo from "../DoneTodo/DoneTodo";
import { Col, Row } from "react-bootstrap";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { TODOS } from "../../constants";

export class Todo extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem(TODOS)) || [
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
    ],
  };
  render() {
    const { todos } = this.state;

    const doneItem = todos.filter((todo) => todo.done);
    const undoneItem = todos.filter((todo) => !todo.done);

    const getValue = (value) => {
      let todos = [
        ...this.state.todos,
        { id: v4(), title: value, done: false },
      ];
      if (value !== "") {
        this.setState({ todos });
        toast.success("Add todo");
        localStorage.setItem(TODOS, JSON.stringify(todos));
      } else {
        toast.error("Please fill !!!");
      }
    };

    const doneTodo = (id) => {
      let todos = this.state.todos.filter((todo) => {
        if (todo.id === id) {
          todo.done = true;
        }
        return todo;
      });
      this.setState({ todos });

      localStorage.setItem(TODOS, JSON.stringify(todos));
    };

    const deleteTodo = (id) => {
      let todos = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({ todos });
      toast.error("Delete todo !!!");
      localStorage.setItem(TODOS, JSON.stringify(todos));
    };
    return (
      <div className="container">
        <h1 className="fw-bold fs-12 text-center">Todo App</h1>
        <TodoForm getValue={getValue} />

        <Row>
          <Col xs={6}>
            {" "}
            {undoneItem.map((todo, i) => (
              <UnDoneTodo key={i} {...todo} doneTodo={doneTodo} />
            ))}
          </Col>
          <Col xs={6}>
            {" "}
            {doneItem.map((todo, i) => (
              <DoneTodo deleteTodo={deleteTodo} key={i} {...todo} />
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Todo;
