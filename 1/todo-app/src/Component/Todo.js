import React, { Component } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";
import { v1 as uuid } from "uuid";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      inputVlaue: " ",
      list: [],
      id: uuid(),
      editItem: false,
    };
  }

  getTime() {
    let d = new Date();
    let n = d.getTime();
    return n;
  }

  useInput = (e) => {
    this.setState({ inputVlaue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.inputVlaue,
    };

    this.setState({
      list: [...this.state.list, newItem],
      inputVlaue: " ",
      id: uuid(),
      editItem: false,
    });
  };

  //delete item
  handleDeleteItem = (id) => {
    const filterItem = this.state.list.filter((item) => item.id !== id);
    this.setState({
      list: filterItem,
    });
  };

  //edit item
  handleEditItem = (id)=>{
    const filterItem = this.state.list.filter((item) => item.id !== id);
    const seletItem = this.state.list.find((item)=>item.id === id);
    console.log(seletItem)
    this.setState({
      list: filterItem ,
      inputVlaue : seletItem.title,
      editItem: true ,
      id : id
    })
    
  }
  render() {
    return (
      <>
        <Todoform
          addTodoValue={this.state.inputVlaue}
          setInputText={this.useInput.bind(this)}
          submitTodoHandle={this.handleSubmit.bind(this)}
          editItem = {this.state.editItem}
          
        />

        <Todolist
          items = {this.state.list}
          handleDelete = {this.handleDeleteItem.bind(this)}
          handleEdit = {this.handleEditItem.bind(this)}
        />
      </>
    );
  }
}
