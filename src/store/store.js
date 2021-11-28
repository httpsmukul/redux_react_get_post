import { createStore } from "redux";
import { reducer } from "./TodoStore/reducer";

export const store = createStore(reducer);

// store.subscribe(() => {
// 	console.log("store change");
// });
