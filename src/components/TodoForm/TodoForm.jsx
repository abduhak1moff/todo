import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class TodoForm extends Component {
  render() {
    return (
      <Form className="my-4 w-50 mx-auto">
        <InputGroup className="mb-3">
          <Form.Control placeholder="Add Todo" />
          <button className="btn btn-primary ">Add Todo</button>
        </InputGroup>
      </Form>
    );
  }
}

export default TodoForm;
