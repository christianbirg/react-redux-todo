import React from 'react';
import {connect } from 'react-redux';

import TodoStatus from './../../constants/TodoStatus.js';
import { deleteTodo, changeTodoStatus } from './../../actions/TodoActions.js';
import style from './style.css';

@connect((store) => {
  return {

  }
})
export default class Todo extends React.Component {

  onClick() {
    this.props.dispatch(deleteTodo(this.props.todo));
  }

  onChange() {
    this.props.dispatch(changeTodoStatus({
      id: this.props.todo.id,
      status: this.props.todo.status === TodoStatus.COMPLETED ? TodoStatus.ACTIVE : TodoStatus.COMPLETED
    }));
  }

  render() {
    let { todo } = this.props;
    return (
      <li data-uid={this.props.todo.id} class={style.todo}>
        <div>
          <input class={style.todo__toggle} type="checkbox" checked={ todo.status === TodoStatus.COMPLETED } onChange={this.onChange.bind(this)}/>
          <label>{this.props.todo.name}</label>
          <button onClick={this.onClick.bind(this)} class={style.todo__destroy}></button>
        </div>
      </li>
    )
  }

}
