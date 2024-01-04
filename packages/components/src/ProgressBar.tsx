import type { ProgressBarVariants } from './styles/ProgressBar.css';
import type { ForwardedRef } from 'react';
import type { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';

import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { ProgressBar as AriaProgressBar } from 'react-aria-components';

import { base, indeterminate, outerCircle, innerCircle, variants } from './styles/ProgressBar.css';

type ProgressBarProps = AriaProgressBarProps & ProgressBarVariants;

const ProgressBar = forwardRef(
  (
    { size = 'small', className, ...props }: ProgressBarProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const center = 16;
    const strokeWidth = 4;
    const r = 16 - strokeWidth;
    const c = 2 * r * Math.PI;

    return (
      <AriaProgressBar {...props} ref={ref} className={clsx(base, variants({ size }), className)}>
        {({ percentage }) => (
          <svg
            width={64}
            height={64}
            viewBox="0 0 32 32"
            fill="none"
            strokeWidth={strokeWidth}
            className={clsx(props.isIndeterminate && indeterminate)}
          >
            <circle
              cx={center}
              cy={center}
              r={r}
              strokeWidth={strokeWidth}
              className={outerCircle}
            />
            <circle
              cx={center}
              cy={center}
              r={r}
              strokeDasharray={`${c} ${c}`}
              strokeDashoffset={c - (props.isIndeterminate ? 0.34 : percentage! / 100) * c}
              transform="rotate(-90 16 16)"
              className={innerCircle}
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
