import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { MeterProps as AriaMeterProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Meter as AriaMeter, Text, composeRenderProps } from 'react-aria-components';

import styles from './styles/Meter.module.css';
import { useLPContextProps } from './utils';

const meterStyles = cva(styles.meter, {
	variants: {
		variant: {
			bar: styles.bar,
			donut: styles.donut,
		},
	},
	defaultVariants: {
		variant: 'donut',
	},
});

interface MeterProps extends AriaMeterProps, VariantProps<typeof meterStyles> {
	ref?: Ref<HTMLDivElement>;
}

const MeterContext = createContext<ContextValue<MeterProps, HTMLDivElement>>(null);

/**
 * A meter represents a quantity within a known range, or a fractional value.
 *
 * https://react-spectrum.adobe.com/react-aria/Meter.html
 */
const Meter = ({ ref, ...props }: MeterProps) => {
	[props, ref] = useLPContextProps(props, ref, MeterContext);
	const { variant = 'donut' } = props;

	const center = 64;
	const strokeWidth = 8;
	const r = 64 - strokeWidth;
	const c = 2 * r * Math.PI;

	return (
		<AriaMeter
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				meterStyles({ ...renderProps, variant, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { percentage, valueText }) => (
				<>
					{variant === 'donut' && (
						// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
						<svg
							viewBox="0 0 128 128"
							fill="none"
							strokeWidth={strokeWidth}
							className={styles.icon}
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
								strokeDashoffset={c - (percentage / 100) * c}
								transform="rotate(-90 64 64)"
								className={styles.innerCircle}
							/>
							<text x={center} y={center} className={styles.text}>
								{valueText?.match(/\d+/)?.[0]}
								<tspan className={styles.unit}>{valueText?.replace(/\d+/, '')}</tspan>
							</text>
						</svg>
					)}
					{variant === 'bar' && (
						<>
							{children}
							<Text className={styles.value}>{valueText}</Text>
							<div className={styles.track}>
								<div className={styles.fill} style={{ width: `${percentage}%` }} />
							</div>
						</>
					)}
				</>
			))}
		</AriaMeter>
	);
};

export { Meter, MeterContext, meterStyles };
export type { MeterProps };
