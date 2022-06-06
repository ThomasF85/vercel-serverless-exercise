import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import Exercise4 from './components/Exercise4';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<div>
				<Exercise1 />
				<hr />
				<Exercise2 />
				<hr />
				<Exercise3 />
				<hr />
				<Exercise4 />
			</div>
		</>
	);
}
