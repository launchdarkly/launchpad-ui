import type { Space } from '@launchpad-ui/types';
import type { ComponentProps, ReactNode } from 'react';

import { cx } from 'classix';
import { Children } from 'react';

import styles from './styles/Stack.module.css';

type StackProps = ComponentProps<'div'> & {
	'data-test-id'?: string;
	gap?: Space;
	align?: 'left' | 'center' | 'right';
	children: ReactNode;
};

/**
 * @deprecated use `Box` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/legacy-experimental-box--docs
 */
const Stack = ({
	children,
	className,
	'data-test-id': testId = 'stack',
	gap = '0',
	align,
	...props
}: StackProps) => {
	return (
		<div
			{...props}
			className={cx(styles.flex, styles[`gap-${gap}`], !!align && styles[align], className)}
			data-test-id={testId}
		>
			{/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
			{Children.map(children, (child, index) => child && <div key={index}>{child}</div>)}
		</div>
	);
};

export { Stack };
export type { StackProps };
