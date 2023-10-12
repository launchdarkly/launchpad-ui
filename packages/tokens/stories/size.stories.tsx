import { CopyToClipboard } from '@launchpad-ui/clipboard';

import tokens from '../dist/default.json';

export default {
  title: 'Tokens/Size',
};

const sizes = tokens.size;
const valueInPx = (value: string) => {
  const removeLast3Chars = value.slice(0, -3);
  const stringToNumber = parseFloat(removeLast3Chars.toString());

  return `(${stringToNumber * 16}px)`;
};

export const Size = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'max-content auto max-content',
        alignItems: 'center',
        gap: 'var(--lp-size-24)',
      }}
    >
      {Object.entries(sizes).map(([key, value]) => (
        <>
          <CopyToClipboard text={`--lp-size-${key}`}>{`--lp-size-${key}`}</CopyToClipboard>
          <div>
            {value}
            {valueInPx(value)}
          </div>
          <div
            style={{
              backgroundColor: 'var(--lp-color-system-green-500)',
              width: value,
              height: 'var(--lp-size-16)',
            }}
          />
        </>
      ))}
    </div>
  ),
};
