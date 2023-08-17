import fs from 'fs';

export default async () => {
  fs.unlinkSync('./playwright/stories.json');
};
