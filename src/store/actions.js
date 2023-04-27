import {
  ADD_TODO,
  SET_INPUT_TODO,
  SET_ACTIVE_TODO,
  SET_ACTIVE_ALL_TODO,
  DELETE_TODO,
  CLEAR_TODO_COMPLETE,
  EDIT_TODO
} from "./constants";


export const setTodoInput = payload => ({
  type: SET_INPUT_TODO,
  payload
})

export const addTodoInput = payload => ({
  type: ADD_TODO,
  payload
})

export const setActiveTodo = todoId => ({
  type: SET_ACTIVE_TODO,
  todoId
})

export const setActiveAllTodo = checkedAll => ({
  type: SET_ACTIVE_ALL_TODO,
  checkedAll
})

export const deleteTodo = todoId => ({
  type: DELETE_TODO,
  todoId
})

export const clearTodoComplete = () => ({
  type: CLEAR_TODO_COMPLETE,
})

export const editTodo = (todoId, payload) => ({
  type: EDIT_TODO,
  todoId,
  payload
})