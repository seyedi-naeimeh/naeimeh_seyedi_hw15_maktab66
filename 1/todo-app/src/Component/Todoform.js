import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Todoform extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { addTodoValue, setInputText, submitTodoHandle ,editItem } = this.props;
    return (
     
      <Container>
        <Row>
          <Col>
            <Form  onSubmit={submitTodoHandle}>
              <Form.Group 
                
                className="mb-3 mt-5 d-flex"
                controlId="form-input"
              >
                <Form.Control
                  value={addTodoValue}
                  onChange={setInputText}
                  // onKeyPress={ this.onKeyPress }
                  type="text"
                  placeholder="add todo item"
                />
                <Button
                  onSubmit={submitTodoHandle}
                  className={editItem ? "btn-success" : "btn-primary"}
                  variant="primary"
                  type="submit"
                >
                  {editItem ? <i className="bi bi-pen-fill "></i>: <i className="bi bi-plus-lg "></i>}
                  
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
