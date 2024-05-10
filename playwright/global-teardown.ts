import fs from 'fs';

export default async () => {
	const file = './playwright/stories.json';
	if (fs.existsSync(file)) {
		fs.unlinkSync(file);
	}
};
