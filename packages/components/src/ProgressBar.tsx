import type { StyleXStyles } from '@stylexjs/stylex';
import type { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';

import * as stylex from '@stylexjs/stylex';
import { ProgressBar as AriaProgressBar } from 'react-aria-components';

import { tokens } from './tokens.stylex';

const spin = stylex.keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(359deg)' },
});

const styles = stylex.create({
  base: {
    display: 'inline-block',
    transformOrigin: '0 0',
  },
  small: {
    transform: 'scale(0.25)',
  },
  medium: {
    transform: 'scale(0.375)',
  },
  large: {
    transform: 'scale(0.5)',
  },
  indeterminate: {
    animationName: spin,
    animationDuration: tokens['duration.350'],
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  outerCircle: {
    stroke: tokens['color.white.100'],
  },
  innerCircle: {
    stroke: tokens['color.gray.500'],
  },
});

interface ProgressBarProps extends Omit<AriaProgressBarProps, 'style'> {
  style?: StyleXStyles;
  size?: 'small' | 'medium' | 'large';
}

const ProgressBar = ({ style, size = 'small', ...props }: ProgressBarProps) => {
  const center = 16;
  const strokeWidth = 4;
  const r = 16 - strokeWidth;
  const c = 2 * r * Math.PI;

  return (
    <AriaProgressBar {...props} {...stylex.props(styles.base, styles[size], style)}>
      {({ percentage }) => (
        <svg
          width={64}
          height={64}
          viewBox="0 0 32 32"
          fill="none"
          strokeWidth={strokeWidth}
          {...stylex.props(props.isIndeterminate && styles.indeterminate)}
        >
          <circle
            cx={center}
            cy={center}
            r={r}
            strokeWidth={strokeWidth}
            {...stylex.props(styles.outerCircle)}
          />
          <circle
            cx={center}
            cy={center}
            r={r}
            strokeDasharray={`${c} ${c}`}
            strokeDashoffset={c - (props.isIndeterminate ? 0.34 : percentage! / 100) * c}
            transform="rotate(-90 16 16)"
            {...stylex.props(styles.innerCircle)}
          />
        </svg>
      )}
    </AriaProgressBar>
  );
};

export { ProgressBar };
export type { ProgressBarProps };
