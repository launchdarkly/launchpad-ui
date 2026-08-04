import { useRef } from 'react';
import { cx } from 'classix';

import type { ModalFooterProps } from './ModalFooter';
import { ModalFooter } from './ModalFooter';
import { useAbsoluteFooter } from './utils';

import styles from './styles/Modal.module.css';

/**
 * @deprecated use `div[slot='footer']` with `Modal` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-overlays-modal--docs
 */
const AbsoluteModalFooter = ({ className, ...rest }: ModalFooterProps) => {
	const ref = useRef<HTMLDivElement>(null);
	useAbsoluteFooter(ref);

	return <ModalFooter ref={ref} className={cx(className, styles.absoluteFooter)} {...rest} />;
};

export { AbsoluteModalFooter };
