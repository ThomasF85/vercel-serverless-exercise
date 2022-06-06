import fs from 'fs';

export default async function handler(request, response) {
	return response.status(403).json({message: 'Error: request method not allowed.'});
}
