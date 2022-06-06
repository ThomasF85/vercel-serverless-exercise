import {useState} from 'react';

export default function Exercise4() {
	const [data4, setData4] = useState('...loading');
	const [error, setError] = useState({
		error: false,
		message: '',
	});

	async function fetchExercise4(id) {
		fetch(`/api/users/${id}`, {
			method: 'DELETE',
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData4(JSON.stringify(data, null, 4));
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
				setData4();
			});
	}

	return (
		<>
			<h2>Exercise 4</h2>
			<button
				onClick={() => {
					fetchExercise4('put in an id');
				}}
			>
				Delete user via API
			</button>
			{error.error && <div>An error occured: {error.message}</div>}
			<pre>{data4}</pre>
		</>
	);
}
