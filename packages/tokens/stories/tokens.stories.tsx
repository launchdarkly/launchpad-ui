import { CopyToClipboard } from '@launchpad-ui/clipboard';

import tokens from './tokens.json';

export default {
  title: 'Tokens/Colors',
};

const flatten = (obj: Record<string, unknown>) => {
  const result = {};

  for (const i in obj) {
    if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
      const temp = flatten(obj[i]);
      for (const j in temp) {
        const key = j !== ' ' ? `${i}-${j}` : i;
        result[key] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
};

const getTokenTable = (tokens: Record<string, unknown>) => (
  <table style={{ borderCollapse: 'separate', borderSpacing: '20px 0' }}>
    <thead>
      <tr>
        <th></th>
        <th style={{ textAlign: 'left' }}>Name</th>
        <th style={{ textAlign: 'left' }}>Value</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(tokens).map(([key, value]) => (
        <tr key={key}>
          <td>
            <div
              style={{
                backgroundColor: value,
                height: '50px',
                width: '150px',
                border: '1px solid var(--lp-color-border-ui-primary)',
              }}
            ></div>
          </td>
          <td>
            <CopyToClipboard text={`--lp-color-${key}`}>{`--lp-color-${key}`}</CopyToClipboard>
          </td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const global = Object.keys(tokens.color)
  .filter((key) =>
    ['black', 'blue', 'cyan', 'gray', 'pink', 'purple', 'white', 'yellow', 'system'].includes(key)
  )
  .reduce((obj, key) => {
    obj[key] = tokens.color[key];
    return obj;
  }, {});

export const Global = {
  render: () => getTokenTable(flatten(global)),
};

const alias = Object.keys(tokens.color)
  .filter((key) => ['bg', 'border', 'fill', 'shadow', 'text'].includes(key))
  .reduce((obj, key) => {
    obj[key] = tokens.color[key];
    return obj;
  }, {});

export const Alias = {
  render: () => getTokenTable(flatten(alias)),
};
