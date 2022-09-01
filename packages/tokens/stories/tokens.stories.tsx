/*
const tokens = require('../dist/index');

export default {
  title: 'Tokens/Colors',
};

const global = Object.keys(tokens.color)
  .filter((key) =>
    ['black', 'blue', 'cyan', 'gray', 'pink', 'purple', 'white', 'yellow'].includes(key)
  )
  .reduce((obj, key) => {
    obj[key] = tokens.color[key];
    return obj;
  }, {});
const colors = Object.values(global).map((color) => Object.values(color));
const system = Object.values(tokens.color.system).map((color) => Object.values(color));

export const Colors = {
  render: () => (
    <>
      {[...colors, ...system].map((color, index) => (
        <ul style={{ display: 'flex', flexWrap: 'wrap' }} key={index}>
          {color.map((token) => (
            <li style={{ listStyleType: 'none', margin: '4px' }} key={token.value}>
              <div
                style={{
                  backgroundColor: token.value,
                  height: '100px',
                  width: '100px',
                  border: '1px solid var(--color-border)',
                }}
              ></div>
            </li>
          ))}
        </ul>
      ))}
    </>
  ),
};
*/
