import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { forwardRef } from 'react';
import { ProgressBar as AriaProgressBar } from 'react-aria-components';

import styles from './styles/ProgressBar.module.css';

const progressBar = cva(styles.base, {
  variants: {
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

type ProgressBarProps = AriaProgressBarProps & VariantProps<typeof progressBar>;

const _ProgressBar = (
  { size = 'small', className, ...props }: ProgressBarProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const center = 16;
  const strokeWidth = 4;
  const r = 16 - strokeWidth;
  const c = 2 * r * Math.PI;

  return (
    <AriaProgressBar {...props} ref={ref} className={progressBar({ size, className })}>
      {({ percentage }) => (
        <svg
          width={64}
          height={64}
          viewBox="0 0 32 32"
          fill="none"
          strokeWidth={strokeWidth}
          className={cx(props.isIndeterminate && styles.indeterminate)}
        >
          <circle
            cx={center}
            cy={center}
            r={r}
            strokeWidth={strokeWidth}
            className={styles.outerCircle}
          />
          <circle
            cx={center}
            cy={center}
            r={r}
            strokeDasharray={`${c} ${c}`}
            strokeDashoffset={c - (props.isIndeterminate ? 0.34 : percentage! / 100) * c}
            transform="rotate(-90 16 16)"
            className={styles.innerCircle}
          />
        </svg>
      )}
    </AriaProgressBar>
  );
};

const ProgressBar = forwardRef(_ProgressBar);

export { ProgressBar };
export type { ProgressBarProps };
