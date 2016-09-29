import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from './../../actions/TodoActions.js';
import style from './style.css';

@connect((store) => {
  return {
    newTodo: store.todos.newTodo
  };
})
export default class Heading extends React.Component {


  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.dispatch(addTodo(this.props.newTodo));
      this.ref.value = "";
    }
  }

  onChange(e) {
    this.props.newTodo = this.ref.value;
  }

  render() {
    return (
      <header class={style.header}>
        <h1>To-Do`s</h1>
        <input
          id={style.newTodo}
          class={style.newTodo}
          ref={(ref) => {
            this.ref = ref
          }}
          onKeyPress={this.handleKeyPress.bind(this)}
          onChange={this.onChange.bind(this)}
          placeholder="What needs to be done?" autofocus
        />
      </header>
    )
  }

}
