import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { ProgressBarProps as AriaProgressBarProps, ContextValue } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { ProgressBar as AriaProgressBar, composeRenderProps, Text } from 'react-aria-components';

import styles from './styles/ProgressBar.module.css';
import { useLPContextProps } from './utils';

const progressBarStyles = cva(styles.progress, {
	variants: {
		variant: {
			bar: styles.bar,
			spinner: styles.spinner,
		},
	},
	defaultVariants: {
		variant: 'spinner',
	},
});

const iconStyles = cva(styles.base, {
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

interface ProgressBarProps
	extends AriaProgressBarProps,
		VariantProps<typeof iconStyles>,
		VariantProps<typeof progressBarStyles> {
	ref?: Ref<HTMLDivElement>;
}

const ProgressBarContext = createContext<ContextValue<ProgressBarProps, HTMLDivElement>>(null);

/**
 * Progress bars show either determinate or indeterminate progress of an operation over time.
 *
 * https://react-spectrum.adobe.com/react-aria/ProgressBar.html
 */
const ProgressBar = ({ ref, ...props }: ProgressBarProps) => {
	[props, ref] = useLPContextProps(props, ref, ProgressBarContext);
	const { size = 'small', variant = 'spinner' } = props;

	const center = 16;
	const strokeWidth = 4;
	const r = 16 - strokeWidth;
	const c = 2 * r * Math.PI;

	return (
		<AriaProgressBar
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				progressBarStyles({ ...renderProps, variant, className }),
			)}
		>
			{composeRenderProps(
				props.children,
				(children, { isIndeterminate, percentage, valueText }) => (
					<>
						{variant === 'spinner' && (
							// biome-ignore lint/a11y/noSvgWithoutTitle: ignore
							<svg
								viewBox="0 0 32 32"
								fill="none"
								strokeWidth={strokeWidth}
								className={cx(iconStyles({ size }), isIndeterminate && styles.indeterminate)}
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
						{variant === 'bar' && (
							<>
								{children}
								<Text className={styles.value}>{valueText}</Text>
								<div className={styles.track}>
									<div
										className={cx(styles.fill, { [styles.max]: percentage === 100 })}
										style={{ width: `${percentage}%` }}
									/>
								</div>
							</>
						)}
					</>
				),
			)}
		</AriaProgressBar>
	);
};

export { ProgressBar, ProgressBarContext, progressBarStyles };
export type { ProgressBarProps };
