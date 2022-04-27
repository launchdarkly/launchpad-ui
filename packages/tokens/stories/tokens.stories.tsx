/* eslint-disable @typescript-eslint/no-var-requires */
const tokens = require('../dist/index');

export default {
  title: 'Tokens/Colors',
};

const colors = Object.values(tokens.color).map((color) => Object.values(color));
colors.pop();
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
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                }}
              ></div>
            </li>
          ))}
        </ul>
      ))}
    </>
  ),
};
