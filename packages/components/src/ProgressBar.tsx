import type { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';

import * as stylex from '@stylexjs/stylex';
import { ProgressBar as AriaProgressBar } from 'react-aria-components';

const spin = stylex.keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(359deg)' },
});

const styles = stylex.create({
  base: {
    display: 'inline-block',
    verticalAlign: 'middle',
    transform: 'rotate(-90deg)',
  },
  indeterminate: {
    animationName: spin,
    animationDuration: 'var(--lp-duration-350)',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
});

interface ProgressBarProps extends AriaProgressBarProps {
  label?: string;
}

const ProgressBar = ({ label, ...rest }: ProgressBarProps) => {
  const center = 16;
  const strokeWidth = 4;
  const r = 16 - strokeWidth;
  const c = 2 * r * Math.PI;

  return (
    <AriaProgressBar {...rest}>
      {({ percentage }) => (
        <svg
          width={64}
          height={64}
          viewBox="0 0 32 32"
          fill="none"
          strokeWidth={strokeWidth}
          {...stylex.props(styles.base, rest.isIndeterminate && styles.indeterminate)}
        >
          <circle
            cx={center}
            cy={center}
            r={r - (strokeWidth / 2 - 0.25)}
            stroke="var(--lp-color-gray-50)"
            strokeWidth={0.5}
          />
          <circle
            cx={center}
            cy={center}
            r={r + (strokeWidth / 2 - 0.25)}
            stroke="var(--lp-color-gray-50)"
            strokeWidth={0.5}
          />
          <circle
            cx={center}
            cy={center}
            r={r}
            stroke="var(--lp-color-gray-500)"
            strokeDasharray={`${c} ${c}`}
            strokeDashoffset={c - (rest.isIndeterminate ? 0.25 : percentage || 0 / 100) * c}
            strokeLinecap="round"
            transform="rotate(-90 16 16)"
          />
        </svg>
      )}
    </AriaProgressBar>
  );
};

export { ProgressBar };
export type { ProgressBarProps };
