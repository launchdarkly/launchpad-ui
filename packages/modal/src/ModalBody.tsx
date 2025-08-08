import type { ComponentProps } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { cx } from 'classix';
import { useRef } from 'react';

import styles from './styles/Modal.module.css';
import { useOverflowY } from './utils';

type ModalBodyProps = ComponentProps<'div'> & {
	'data-test-id'?: string;
};

/**
 * @deprecated use `div[slot='body']` with `Modal` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-overlays-modal--docs
 */
const ModalBody = ({
	children,
	className,
	'data-test-id': testId = 'modal-body',
	...rest
}: ModalBodyProps) => {
	const ref = useRef<HTMLDivElement>(null);
	useOverflowY(ref);

	return (
		<div
			{...addLaunchPadAttribution('ModalBody')}
			{...rest}
			ref={ref}
			className={cx(styles.body, className)}
			data-test-id={testId}
		>
			{children}
		</div>
	);
};

export { ModalBody };
export type { ModalBodyProps };
