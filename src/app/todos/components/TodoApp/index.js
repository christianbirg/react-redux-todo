import React from 'react';
import { connect } from 'react-redux';

import TodoList from './../TodoList/';
import Todo from './../Todo/';
import Heading from './../Heading/';
import Footer from './../Footer/';

import style from './style.css';

@connect((store) => {
  console.log("todo app", store);
  return {
    todos: store.todos.todos,
    isFiltered: store.todos.isFiltered,
    filteredBy: store.todos.filteredBy,
  };
})
export default class TodoApp extends React.Component {

  render() {
    var todos = this.props.isFiltered
      ? this.props.todos.filter(this.props.filteredBy).map((task) => <Todo todo={task} />)
      : this.props.todos.map((task) => <Todo todo={task} />);
    return (
      <div class={style.todoApp}>
        <Heading />
        <TodoList>
          { todos }
        </TodoList>
        <Footer />
      </div>
    )
  }

}
