import type { Space } from '@launchpad-ui/types';
import type { ComponentProps, ReactNode } from 'react';

import { cx } from 'classix';
import { Children } from 'react';

import styles from './styles/Inline.module.css';

type InlineProps = ComponentProps<'div'> & {
	'data-test-id'?: string;
	gap?: Space;
	alignX?: 'left' | 'center' | 'right';
	alignY?: 'top' | 'center' | 'bottom';
	children?: ReactNode;
};

/**
 * @deprecated use `Box` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/legacy-experimental-box--docs
 */
const Inline = ({
	children,
	'data-test-id': testId = 'inline',
	gap = '0',
	alignX = 'left',
	alignY = 'center',
	className,
	...props
}: InlineProps) => {
	return (
		<div
			{...props}
			className={cx(
				styles.inline,
				styles[`gap-${gap}`],
				styles[`alignX-${alignX}`],
				styles[`alignY-${alignY}`],
				className,
			)}
			data-test-id={testId}
		>
			{Children.map(
				children,
				(child, index) =>
					child && (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={index} className={styles.item}>
							{child}
						</div>
					),
			)}
		</div>
	);
};

export { Inline };
export type { InlineProps };
