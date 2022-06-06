import {useState} from 'react';

export default function Exercise2() {
	const [data2, setData2] = useState('...loading');
	const [error, setError] = useState({
		error: false,
		message: '',
	});

	function fetchExercise2(id) {
		fetch(`/api/users/${id}`)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				} else {
					return response.json();
				}
			})
			.then(data => {
				setData2(JSON.stringify(data, null, 4));
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
				setData2();
			});
	}

	return (
		<>
			<h2>Exercise 2</h2>
			<button
				onClick={() => {
					fetchExercise2('627257b4697a866ebc4f42a3');
				}}
			>
				Load example Data from api/users/[id]
			</button>
			{error.error && <div>An error occured: {error.message}</div>}
			<pre>{data2}</pre>
		</>
	);
}
