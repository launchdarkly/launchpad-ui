import type { ForwardedRef } from 'react';
import type { MeterProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Meter as AriaMeter, composeRenderProps } from 'react-aria-components';
import styles from './styles/Meter.module.css';

const meter = cva(styles.meter);

const icon = cva(styles.base);

const _Meter = (props: MeterProps, ref: ForwardedRef<HTMLDivElement>) => {
	const center = 16;
	const strokeWidth = 2;
	const r = 16 - strokeWidth;
	const c = 2 * r * Math.PI;

	return (
		<AriaMeter
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				meter({ ...renderProps, className }),
			)}
		>
			{({ percentage, valueText }) => (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg viewBox="0 0 32 32" fill="none" strokeWidth={strokeWidth} className={icon()}>
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
						transform="rotate(-90 16 16)"
						className={styles.innerCircle}
					/>
					<text x={16} y={16} className={styles.value}>
						{valueText?.match(/\d+/)?.[0]}
						<tspan dy={1} className={styles.unit}>
							{valueText?.replace(/\d+/, '')}
						</tspan>
					</text>
				</svg>
			)}
		</AriaMeter>
	);
};

/**
 * A meter represents a quantity within a known range, or a fractional value.
 *
 * https://react-spectrum.adobe.com/react-aria/Meter.html
 */
const Meter = forwardRef(_Meter);

export { Meter };
export type { MeterProps };
