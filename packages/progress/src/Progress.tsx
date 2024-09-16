import type { DelayedIndicatorProps } from './DelayedIndicator';

import { cx } from 'classix';

import { DelayedIndicator } from './DelayedIndicator';
import styles from './styles/Progress.module.css';

type ProgressProps = {
	value?: number;
	size?: 'small' | 'large' | 'xLarge';
	className?: string;
	delayMs?: DelayedIndicatorProps['delayMs'];
	'data-test-id'?: string;
};

const clamp = (number: number, lower: number, upper?: number) =>
	upper ? Math.min(Math.max(number, lower), upper) : Math.min(number, lower);

/**
 * @deprecated use `ProgressBar` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-status-progressbar--docs
 */
const Progress = ({
	value,
	size = 'small',
	'data-test-id': testId = 'progress',
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
	const diameter = dimensions[size]?.diameter || dimensions.small.diameter;
	const strokeWidth = diameter * (isIndeterminate ? 0.1 : 0.5);
	const radius = diameter * 0.5 - strokeWidth * 0.5;
	const circumference = 2 * Math.PI * radius;

	const indicator = (
		// biome-ignore lint/a11y/useFocusableInteractive: <explanation>
		<svg
			className={cx(
				styles.Progress,
				isIndeterminate && styles['Progress--indeterminate'],
				className,
			)}
			width={diameter}
			height={diameter}
			viewBox={`0 0 ${diameter} ${diameter}`}
			data-test-id={testId}
			// biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: <explanation>
			// biome-ignore lint/a11y/useAriaPropsForRole: <explanation>
			role="progressbar"
			aria-valuemin={0}
			aria-valuetext="loading"
			aria-valuemax={100}
		>
			<circle
				className={styles['Progress-track']}
				cx={diameter / 2}
				cy={diameter / 2}
				r={radius}
				strokeWidth={strokeWidth}
			/>
			<circle
				className={styles['Progress-head']}
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

export { Progress };
export type { ProgressProps };
