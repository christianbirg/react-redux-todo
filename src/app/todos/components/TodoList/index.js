import React from 'react';

import style from './style.css';

export default class TodoList extends React.Component {

  render() {
    return (
      <section class={style.main}>
        <input class={style.toggleAll} id={style.toggleAll} type="checkbox" />
        <label for={style.toggleAll}>Mark all as complete</label>
        <ul class={style.todoList}>
          { this.props.children }
        </ul>
      </section>
    )
  }

}
