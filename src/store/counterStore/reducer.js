import { ADD_COUNT, SUB_COUNT } from "./actionType";

const initState = {
	count: 0,
};

export const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case ADD_COUNT:
			return {
				...state,
				count: state.count + payload,
			};

		case SUB_COUNT:
			return {
				...state,
				count: state.count - payload,
			};

		default:
			return { ...state };
	}
};
