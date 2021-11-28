import { ADD_COUNT, SUB_COUNT } from "./actionType"; //import actiontype

export const addCount = (data) => ({ type: ADD_COUNT, payload: data });

export const subCount = (data) => ({ type: SUB_COUNT, payload: data });
