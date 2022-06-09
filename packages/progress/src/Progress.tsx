import cx from 'clsx';
import { clamp } from 'lodash-es';
import { Component } from 'react';

import { DelayedIndicator } from './DelayedIndicator';
import './styles.css';

enum ProgressSize {
  Small = 'small',
  Large = 'large',
  XLarge = 'xLarge',
}

type ProgressProps = {
  value?: number;
  size: ProgressSize;
  className?: string;
  delayMs?: number;
};

class Progress extends Component<ProgressProps> {
  static defaultProps = {
    size: ProgressSize.Small,
    delayMs: 0,
  };

  static dimensions = {
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

  render() {
    const { className, value, delayMs } = this.props;
    const diameter = this.diameter();
    const strokeWidth = this.strokeWidth();
    const radius = this.radius();
    const circumference = this.circumference();

    const indicator = (
      <svg
        className={cx('Progress', { 'Progress--indeterminate': this.isIndeterminate() }, className)}
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
        data-test-id="progress"
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
            circumference *
            (1 - (value === undefined || value === null ? 0.25 : clamp(value, 0, 1)))
          }
        />
      </svg>
    );

    return delayMs ? <DelayedIndicator delayMs={delayMs}>{indicator}</DelayedIndicator> : indicator;
  }

  isIndeterminate = () => this.props.value === undefined || this.props.value === null;
  diameter = () =>
    (Progress.dimensions[this.props.size] && Progress.dimensions[this.props.size].diameter) ||
    Progress.dimensions.small.diameter;

  strokeWidth = () => this.diameter() * (this.isIndeterminate() ? 0.1 : 0.5);
  radius = () => this.diameter() * 0.5 - this.strokeWidth() * 0.5;
  circumference = () => 2 * Math.PI * this.radius();
}

export { Progress, ProgressSize };
export type { ProgressProps };
