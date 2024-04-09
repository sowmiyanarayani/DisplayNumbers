import { React } from 'react';
import './App.scss';

// eslint-disable-next-line no-magic-numbers
const numbers = [1, 2, 3, 4, 5];
const App = () =>
	<div className="App">
		{ numbers.map((number, index) =>
			<div key={ index }> { number } </div>) }
	</div>;

export default App;
