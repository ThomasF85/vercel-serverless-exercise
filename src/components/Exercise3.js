import {useState} from 'react';

export default function Exercise3() {
	const [data3, setData3] = useState('...loading');
	const [error, setError] = useState({
		error: false,
		message: '',
	});

	function fetchExercise3(data) {
		fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData3(JSON.stringify(data, null, 4));
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
				setData3();
			});
	}

	return (
		<>
			<h2>Exercise 3</h2>
			<button
				onClick={() => {
					fetchExercise3({
						name: 'John Doe',
						gender: 'non binary',
						email: 'test@1234.de',
					});
				}}
			>
				Post new data to API under api/users
			</button>
			{error.error && <div>An error occured: {error.message}</div>}
			<pre>{data3}</pre>
		</>
	);
}
