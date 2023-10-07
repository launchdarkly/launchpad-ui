import { CopyToClipboard } from '@launchpad-ui/clipboard';

import tokens from '../dist/default.json';

export default {
  title: 'Tokens/Size',
};

const sizes = tokens.size;

export const Size = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto 1fr',
        alignItems: 'center',
        gap: '2.4rem',
      }}
    >
      {Object.entries(sizes).map(([key, value]) => (
        <>
          <div>
            <CopyToClipboard text={`--lp-size-${key}`}>{`--lp-size-${key}`}</CopyToClipboard>
          </div>
          <div>{value}</div>
          <div
            style={{
              backgroundColor: 'var(--lp-color-system-green-500)',
              width: value,
              height: '1.6rem',
            }}
          />
        </>
      ))}
    </div>
  ),
};
