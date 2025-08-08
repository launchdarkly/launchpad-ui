import type { ReactNode } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { IconButton } from '@launchpad-ui/button';
import { Icon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import { MODAL_LABELLED_BY } from './constants';
import { useModalContext } from './context';
import styles from './styles/Modal.module.css';

type ModalHeaderProps = {
	className?: string;
	withCloseButton?: boolean;
	hasRequiredField?: boolean;
	title: ReactNode;
	description?: ReactNode;
	'data-test-id'?: string;
};

/**
 * @deprecated use `div[slot='header']` with `Modal` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-overlays-modal--docs
 */
const ModalHeader = ({
	withCloseButton = true,
	title,
	hasRequiredField,
	description,
	className,
	'data-test-id': testId = 'modal-header',
}: ModalHeaderProps) => {
	const { onCancel, status } = useModalContext();

	return (
		<div
			{...addLaunchPadAttribution('ModalHeader')}
			className={cx(styles.header, className)}
			data-test-id={testId}
		>
			<div className={styles.headerMain}>
				{status === 'warning' && (
					<Icon
						name="warning"
						data-test-id="modal-header-icon"
						size="medium"
						className={styles.headerIcon}
					/>
				)}
				<h2 id={MODAL_LABELLED_BY} data-test-id="modal-title" className={styles.title}>
					{title}
				</h2>
				{withCloseButton && (
					<IconButton
						aria-label="close"
						size="small"
						icon={<Icon name="cancel" size="medium" />}
						className={styles.closeButton}
						onClick={onCancel}
						data-test-id="modal-close-button"
					/>
				)}
			</div>
			{description && (
				<p className={styles.headerDescription} data-test-id="modal-description">
					{description}
				</p>
			)}
			{hasRequiredField && (
				<div className={styles.headerRequiredFields} data-test-id="modal-required-field">
					<span className={styles.requiredAsterisk}>*</span> Required field
				</div>
			)}
		</div>
	);
};

export { ModalHeader };
export type { ModalHeaderProps };
