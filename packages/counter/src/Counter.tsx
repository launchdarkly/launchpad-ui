import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Counter.module.css';

type CounterProps = ComponentProps<'span'> & {
	value: number;
	subtle?: boolean;
	children?: never;
	'data-test-id'?: string;
};

/**
 * @deprecated use `TagGroup` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-collections-taggroup--docs
 */
const Counter = ({
	value,
	className,
	subtle,
	'data-test-id': testId = 'counter',
	...rest
}: CounterProps) => {
	const classes = cx(styles.Counter, className, subtle && styles['Counter--subtle']);

	return (
		<span className={classes} data-test-id={testId} {...rest}>
			{value}
		</span>
	);
};

export { Counter };
export type { CounterProps };
