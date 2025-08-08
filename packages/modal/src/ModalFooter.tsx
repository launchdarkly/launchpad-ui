import type { HTMLAttributes, ReactNode } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { ButtonGroup } from '@launchpad-ui/button';
import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Modal.module.css';

type ModalFooterProps = HTMLAttributes<HTMLDivElement> & {
	primaryButton?: ReactNode;
	secondaryButton?: ReactNode;
	'data-test-id'?: string;
};

/**
 * @deprecated use `div[slot='footer']` with `Modal` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-overlays-modal--docs
 */
const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
	(
		{ secondaryButton, primaryButton, className, 'data-test-id': testId = 'modal-footer', ...rest },
		ref,
	) => (
		<div
			{...addLaunchPadAttribution('ModalFooter')}
			{...rest}
			className={cx(className, styles.footer)}
			data-test-id={testId}
			ref={ref}
		>
			<ButtonGroup className={styles.footerActions}>
				{secondaryButton}
				{primaryButton}
			</ButtonGroup>
		</div>
	),
);

ModalFooter.displayName = 'ModalFooter';

export { ModalFooter };
export type { ModalFooterProps };
