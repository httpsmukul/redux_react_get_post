// action creator .

import {
	ADD_TODO,
	ADD_TODO_ERROR,
	ADD_TODO_LOADING,
	ADD_TODO_SUCCESS,
	GET_TODO_ERROR,
	GET_TODO_LOADING,
	GET_TODO_SUCCESS,
} from "./actionType";

//todo :-

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
//api :-

export const addTodoLoading = () => ({ type: ADD_TODO_LOADING });

export const addTodoSuccess = (data) => ({
	type: ADD_TODO_SUCCESS,
	payload: data,
});

export const addTodoError = () => ({ type: ADD_TODO_ERROR });

//get

export const getTodoLoading = () => ({ type: GET_TODO_LOADING });

export const getTodoSuccess = (data) => ({
	type: GET_TODO_SUCCESS,
	payload: data,
});

export const getTodoError = () => ({ type: GET_TODO_ERROR });
