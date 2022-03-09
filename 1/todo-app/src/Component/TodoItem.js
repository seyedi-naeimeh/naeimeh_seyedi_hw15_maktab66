import React, { Component } from 'react';
import {  ListGroup } from "react-bootstrap";




export default class TodoItem extends Component {
    
  render() {
    const {title , handleDelete , handleEdit}=this.props
    return (
            <>
             
              <ListGroup.Item className='d-flex justify-content-between '> 
                  <div className='d-flex'> 
                    <i className="bi bi-check-square display-6 "></i>
                    <h2 className='mx-2'>{title}</h2>
                  </div>
                  <div >
                      <span className='text-danger display-6 curser-pointer mx-3' onClick={handleDelete} ><i className='bi bi-x'></i></span>
                      <span className='text-success' onClick={handleEdit}><i className="bi bi-pen-fill "></i></span>
                      
                  </div> 

              </ListGroup.Item>
         
            </>
      
    )
  }
}

