import { ADD_TODO, SET_INPUT_TODO, SET_ACTIVE_TODO, SET_ACTIVE_ALL_TODO } from "./constants";


export const setTodoInput = payload => ({
  type: SET_INPUT_TODO,
  payload
})

export const addTodoInput = payload => ({
  type: ADD_TODO,
  payload
})

export const setActiveAllTodo = payload => ({
  type: SET_ACTIVE_ALL_TODO,
  payload
})