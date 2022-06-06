import {useState} from 'react';

export default function Exercise1() {
	const [data1, setData1] = useState('...loading');
	const [error, setError] = useState({
		error: false,
		message: '',
	});

	function fetchExercise1() {
		fetch('/api/users')
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData1(JSON.stringify(data, null, 4));
				setError({
					error: false,
					message: '',
				});
			})
			.catch(error => {
				setError({
					error: true,
					message: error.message,
				});
				setData1();
			});
	}

	return (
		<>
			<h2>Exercise 1</h2>
			<button
				onClick={() => {
					fetchExercise1();
				}}
			>
				Load example Data from api/users
			</button>
			{error.error && <div>An error occured: {error.message}</div>}
			<pre>{data1}</pre>
		</>
	);
}
