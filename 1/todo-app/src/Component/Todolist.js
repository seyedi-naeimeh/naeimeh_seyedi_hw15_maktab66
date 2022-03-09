import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { Container, Row, Col, ListGroup } from "react-bootstrap";


export default class TodoList extends Component {
  render() {
      const {items , handleDelete , handleEdit}=this.props
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
                {items.map(item => {
                    
                    return(
                        <TodoItem 
                        key={item.id} 
                        title={item.title} 
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={()=> handleEdit(item.id)}
                        />
                    )
                    
                })}
             
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
