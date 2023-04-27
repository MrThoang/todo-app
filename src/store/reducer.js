import { ADD_TODO, SET_ACTIVE_ALL_TODO, SET_ACTIVE_TODO, SET_INPUT_TODO } from "./constants"

export const initialState = {
  todos: [],
  todoInput: '',
}

function todoReducer(state, action) {
  console.log(state.todos);
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
      return {
        ...state,
        todos: state.todos
      }
    default: throw Error('Invalid')
  }
}

export default todoReducer