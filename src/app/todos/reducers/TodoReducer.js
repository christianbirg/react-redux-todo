import TodoAction from './../constants/TodoAction.js';
import TodoStatus from './../constants/TodoStatus.js';

export default function todoReducer(state=initialState, action) {
  switch(action.type) {
    case TodoAction.ADD_TODO: {
      return {
        ...state,
        todos: state.todos.concat({...action.payload, id: Math.floor((Math.random() * 10000) + 1) }),
        newTodo : ""
      };
    }
    case TodoAction.CHANGE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          return {
            ...item,
            status: (item.id === action.payload.id) ? action.payload.status : item.status
          }
        })
      };
    }
    case TodoAction.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      };
    }
    case TodoAction.CLEAR_COMPLETED_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.status !== action.payload.status)
      };
    }
    case TodoAction.FILTERED_BY_ALL: {
      return {
        ...state,
        isFiltered: true,
        filteredBy: function(item) {
          return true
        }
      };
    }
    case TodoAction.FILTERED_BY_ACTIVE: {
      return {
        ...state,
        isFiltered: true,
        filteredBy: function(item) {
          return item.status === TodoStatus.ACTIVE
        }
      };
    }
    case TodoAction.FILTERED_BY_COMPLETED: {
      return {
        ...state,
        isFiltered: true,
        filteredBy: function(item) {
          return item.status === TodoStatus.COMPLETED
        }
      };
    }
    default:
      return {...state};
  }
}

const initialState = {
  todos: [
    {
      id: Math.floor((Math.random() * 10000) + 1),
      name: "Task 1",
      status: TodoStatus.COMPLETED
    },
    {
      id: Math.floor((Math.random() * 10000) + 1),
      name: "Task 2",
      status: TodoStatus.ACTIVE
    },
    {
      id: Math.floor((Math.random() * 10000) + 1),
      name: "Task 3",
      status: TodoStatus.ACTIVE
    }
  ],
  isFiltered: false,
  filteredBy: {},
  newTodo: ""
}
