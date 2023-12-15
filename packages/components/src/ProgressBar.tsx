import type { StyleXStyles } from '@stylexjs/stylex';
import type { ForwardedRef } from 'react';
import type { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';

import * as stylex from '@stylexjs/stylex';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
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

const variants = stylex.create({
  small: {
    transform: 'scale(0.25)',
  },
  medium: {
    transform: 'scale(0.375)',
  },
  large: {
    transform: 'scale(0.5)',
  },
});

interface ProgressBarProps extends Omit<AriaProgressBarProps, 'style'> {
  style?: StyleXStyles;
  size?: keyof typeof variants;
}

const ProgressBar = forwardRef(
  (
    { style, size = 'small', className, ...props }: ProgressBarProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const center = 16;
    const strokeWidth = 4;
    const r = 16 - strokeWidth;
    const c = 2 * r * Math.PI;

    const stylexProps = stylex.props(styles.base, variants[size], style);

    return (
      <AriaProgressBar
        {...props}
        ref={ref}
        className={clsx(stylexProps.className, className)}
        style={stylexProps.style}
      >
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
  }
);

ProgressBar.displayName = 'ProgressBar';

export { ProgressBar };
export type { ProgressBarProps };
