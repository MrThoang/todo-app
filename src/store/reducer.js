import {
  ADD_TODO,
  SET_ACTIVE_ALL_TODO,
  SET_ACTIVE_TODO,
  SET_INPUT_TODO,
  DELETE_TODO,
  CLEAR_TODO_COMPLETE,
  EDIT_TODO
} from "./constants"

export const initialState = {
  todos: [],
  todoInput: '',
}

function todoReducer(state, action) {
  let newValue = []
  switch (action.type) {
    case SET_INPUT_TODO:
      return {
        ...state,
        todoInput: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case SET_ACTIVE_ALL_TODO:
      newValue = state.todos.map((todo) => {
        return { ...todo, completed: action.checkedAll }
      })
      return {
        ...state,
        todos: newValue
      }
    case SET_ACTIVE_TODO:
      newValue = state.todos.map((todo) => {
        return todo.id !== action.todoId ? todo : { ...todo, completed: !todo.completed };
      })
      return {
        ...state,
        todos: newValue
      }
    case DELETE_TODO:
      newValue = state.todos.filter((todo) => todo.id !== action.todoId);
      return {
        ...state,
        todos: newValue
      }
    case CLEAR_TODO_COMPLETE:
      newValue = state.todos.filter(todo => todo.completed === false);
      return {
        ...state,
        todos: newValue
      }
    case EDIT_TODO:
      // newValue = state.todos.splice(action.key, 1, action.payload);
      newValue = state.todos.map((todo) => {
        // return { ...todo, [action.todoId] = action.payload }
      })
      return {
        ...state,
        todos: newValue
      }

    default: throw Error('Invalid')
  }
}

export default todoReducer