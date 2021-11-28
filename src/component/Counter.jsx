import { store } from "../store/store";
import { addCount, subCount } from "../store/counterStore/action";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () =>{
    const dispatch = useDispatch();
	const count = useSelector((store) => store.count);

    return (
        <div>
	<div className="App">
			<h1>Count : {count}</h1>
			<button
				onClick={() => {
					store.dispatch(addCount(1));
				}}
			>
				add 1
			</button>
			<button
				onClick={() => {
					store.dispatch(subCount(1));
				}}
			>
				sub 1
			</button>
            </div>


        </div>
    )
}