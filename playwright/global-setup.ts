import fs from 'fs';

export default async () => {
	const url = process.env.STORYBOOK_URL;

	if (url) {
		const response = await fetch(`${url}index.json`);
		const stories = Object.keys((await response.json()).entries).filter(
			(entry) => !entry.endsWith('--docs'),
		);
		fs.writeFileSync('./playwright/stories.json', JSON.stringify(stories), 'utf-8');
	}
};
