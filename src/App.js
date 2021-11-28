import "./App.css";
import { Counter } from "./component/Counter";
import { Todos } from "./component/Todos";

function App() {
	// console.log(store.getState().count);

	return (
		<div className="App">
			<Counter />
			<hr />
			<Todos></Todos>
		</div>
	);
}

export default App;
