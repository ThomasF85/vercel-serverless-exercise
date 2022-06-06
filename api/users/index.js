import fs from 'fs';

import {nanoid} from 'nanoid';

export default async function handler(request, response) {
	if (request.method === 'GET') {
		console.log(fs.readFileSync('db/users.json', 'utf8'));
		// return ...;
	}

	// This could be helpful:
	// fs.writeFileSync('db/users.json', JSON.stringify(newData, null, 4), 'utf8');

	return response.status(403).json({message: 'Error: request method not allowed.'});
}
