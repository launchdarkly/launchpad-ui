import type { Ref } from 'react';
import type { MeterProps as AriaMeterProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Meter as AriaMeter, composeRenderProps } from 'react-aria-components';

import styles from './styles/Meter.module.css';
import { useLPContextProps } from './utils';

const meter = cva(styles.meter);
const icon = cva(styles.base);

interface MeterProps extends AriaMeterProps {
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

	const center = 64;
	const strokeWidth = 8;
	const r = 64 - strokeWidth;
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
				<svg viewBox="0 0 128 128" fill="none" strokeWidth={strokeWidth} className={icon()}>
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
					<text x={center} y={center} className={styles.value}>
						{valueText?.match(/\d+/)?.[0]}
						<tspan className={styles.unit}>{valueText?.replace(/\d+/, '')}</tspan>
					</text>
				</svg>
			)}
		</AriaMeter>
	);
};

export { Meter, MeterContext };
export type { MeterProps };
