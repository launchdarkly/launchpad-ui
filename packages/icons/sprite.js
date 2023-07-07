/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
global.DOMParser = new JSDOM().window.DOMParser;

const filePath = path.resolve(__dirname, 'icons');

const parser = new DOMParser();

fs.readdir(filePath, (error, files) => {
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFileSync(
    'dist/sprite.svg',
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>',
    { flag: 'a+' },
    () => undefined
  );

  files.forEach((file) => {
    const name = file.replace('.svg', '');

    const result = fs.readFileSync(path.resolve(__dirname, `icons/${file}`), 'utf8');
    const svg = parser.parseFromString(result, 'image/svg+xml').documentElement.innerHTML;
    const content = `<symbol viewBox="0 0 24 24" id="${name}">${svg.trim()}</symbol>`;

    fs.writeFileSync('dist/sprite.svg', content, { flag: 'a+' }, (error) => {
      if (error) {
        return console.error(error);
      }
    });
  });

  fs.writeFileSync('dist/sprite.svg', '</defs></svg>', { flag: 'a+' }, () => undefined);
});
