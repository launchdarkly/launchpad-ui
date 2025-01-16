import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { ProgressBar as AriaProgressBar, composeRenderProps } from 'react-aria-components';

import styles from './styles/ProgressBar.module.css';

const progressBar = cva(styles.progress);

const icon = cva(styles.base, {
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

interface ProgressBarProps extends AriaProgressBarProps, VariantProps<typeof icon> {
	ref?: Ref<HTMLDivElement>;
}

/**
 * Progress bars show either determinate or indeterminate progress of an operation over time.
 *
 * https://react-spectrum.adobe.com/react-aria/ProgressBar.html
 */
const ProgressBar = ({ size = 'small', ref, ...props }: ProgressBarProps) => {
	const center = 16;
	const strokeWidth = 4;
	const r = 16 - strokeWidth;
	const c = 2 * r * Math.PI;

	return (
		<AriaProgressBar
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				progressBar({ ...renderProps, className }),
			)}
		>
			{({ percentage, isIndeterminate }) => (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					viewBox="0 0 32 32"
					fill="none"
					strokeWidth={strokeWidth}
					className={cx(icon({ size }), isIndeterminate && styles.indeterminate)}
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
						strokeDashoffset={c - (isIndeterminate ? 0.34 : percentage || 0 / 100) * c}
						transform="rotate(-90 16 16)"
						className={styles.innerCircle}
					/>
				</svg>
			)}
		</AriaProgressBar>
	);
};

export { ProgressBar };
export type { ProgressBarProps };
