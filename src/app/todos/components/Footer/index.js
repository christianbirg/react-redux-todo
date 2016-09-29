import React from 'react';
import { connect } from 'react-redux';

import {
  clearCompletedTodos,
  filterAllTodos,
  filterCompletedTodos,
  filterActiveTodos 
} from './../../actions/TodoActions';

import style from './style.css';

@connect((store) => {
  return {
    length: store.todos.todos.length
  };
})
export default class Footer extends React.Component {

  onClickActive() {
    this.props.dispatch(filterActiveTodos())
  }

  onClickCompleted() {
    this.props.dispatch(filterCompletedTodos())
  }

  onClickAll() {
    this.props.dispatch(filterAllTodos())
  }

  onClearAll() {
    this.props.dispatch(clearCompletedTodos())
  }


  render() {
    if(this.props.length < 1) {
      return false;
    }

    return (
      <footer class={style.footer}>
        <span class={style.todoCount}><strong>{ this.props.length }</strong> item left</span>
        <ul class={style.filters}>
          <li>
            <a onClick={() => this.onClickAll()}>All</a>
          </li>
          <li>
            <a onClick={() => this.onClickActive()}>Active</a>
          </li>
          <li>
            <a onClick={() => this.onClickCompleted()}>Completed</a>
          </li>
        </ul>
        <button class={style.clearCompleted} onClick={() => this.onClearAll()}>Clear completed</button>
      </footer>
    )
  }

}
