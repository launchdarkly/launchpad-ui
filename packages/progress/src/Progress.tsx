import { cx } from 'classix';

import { DelayedIndicator } from './DelayedIndicator';
import './styles/Progress.css';

enum ProgressSize {
  Small = 'small',
  Large = 'large',
  XLarge = 'xLarge',
}

type ProgressProps = {
  value?: number;
  size?: ProgressSize;
  className?: string;
  delayMs?: number;
  testId?: string;
};

const clamp = (number: number, lower: number, upper?: number) =>
  upper ? Math.min(Math.max(number, lower), upper) : Math.min(number, lower);

const Progress = ({
  value,
  size = ProgressSize.Small,
  testId,
  className,
  delayMs = 0,
}: ProgressProps) => {
  const dimensions = {
    small: {
      diameter: 16,
    },
    large: {
      diameter: 24,
    },
    xLarge: {
      diameter: 32,
    },
  };

  const isIndeterminate = value === undefined || value === null;
  const diameter = (dimensions[size] && dimensions[size].diameter) || dimensions.small.diameter;
  const strokeWidth = diameter * (isIndeterminate ? 0.1 : 0.5);
  const radius = diameter * 0.5 - strokeWidth * 0.5;
  const circumference = 2 * Math.PI * radius;

  const indicator = (
    <svg
      className={cx('Progress', { 'Progress--indeterminate': isIndeterminate }, className)}
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
      data-test-id={testId || 'progress'}
      role="progressbar"
      aria-valuemin={0}
      aria-valuetext="loading"
      aria-valuemax={100}
    >
      <circle
        className="Progress-track"
        cx={diameter / 2}
        cy={diameter / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className="Progress-head"
        cx={diameter / 2}
        cy={diameter / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={
          circumference * (1 - (value === undefined || value === null ? 0.25 : clamp(value, 0, 1)))
        }
      />
    </svg>
  );

  return delayMs ? <DelayedIndicator delayMs={delayMs}>{indicator}</DelayedIndicator> : indicator;
};

export { Progress, ProgressSize };
export type { ProgressProps };
