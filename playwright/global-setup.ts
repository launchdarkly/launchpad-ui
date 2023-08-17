import fs from 'fs';

export default async () => {
  const response = await fetch(`${process.env.STORYBOOK_URL}/stories.json`);
  const stories = Object.keys((await response.json()).stories);
  fs.writeFileSync('./playwright/stories.json', JSON.stringify(stories), 'utf-8');
};
