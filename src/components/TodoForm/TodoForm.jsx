import React, { Component, createRef } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class TodoForm extends Component {
  inputRef = createRef();
  render() {
    const { todo } = this.props;
    const submit = (e) => {
      e.preventDefault();
      this.props.getValue(this.inputRef.current.value);
      this.inputRef.current.value = "";
    };

    this.inputRef.current && (this.inputRef.current.value = todo);
    return (
      <Form className="my-4 w-50 mx-auto" onSubmit={submit}>
        <InputGroup className="mb-3">
          <Form.Control placeholder="Add Todo" ref={this.inputRef} />
          <button className="btn btn-primary ">{todo ? "Save" : "Add"}</button>
        </InputGroup>
      </Form>
    );
  }
}

export default TodoForm;
