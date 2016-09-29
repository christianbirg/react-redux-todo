import TodoStatus from './../constants/TodoStatus.js';
import TodoAction from './../constants/TodoAction.js';

export function addTodo(todo) {
  return {
    type: TodoAction.ADD_TODO,
    payload: {
      name: todo,
      status: TodoStatus.ACTIVE
    }
  }
}

export function changeTodoStatus(todo) {
  return {
    type: TodoAction.CHANGE_TODO_STATUS,
    payload: todo
  }
}

export function deleteTodo(todo) {
  return {
    type: TodoAction.DELETE_TODO,
    payload: todo
  }
}

export function clearCompletedTodos() {
  return {
    type: TodoAction.CLEAR_COMPLETED_TODO,
    payload: {
      status: TodoStatus.COMPLETED
    }
  }
}

export function filterAllTodos() {
  return {
    type: TodoAction.FILTERED_BY_ALL,
    payload: {}
  }
}

export function filterActiveTodos() {
  return {
    type: TodoAction.FILTERED_BY_ACTIVE,
    payload: {}
  }
}

export function filterCompletedTodos() {
  return {
    type: TodoAction.FILTERED_BY_COMPLETED,
    payload: {}
  }
}
