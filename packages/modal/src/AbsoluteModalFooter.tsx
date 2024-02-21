import type { ModalFooterProps } from './ModalFooter';

import { cx } from 'classix';
import { useRef } from 'react';

import { ModalFooter } from './ModalFooter';
import styles from './styles/Modal.module.css';
import { useAbsoluteFooter } from './utils';

const AbsoluteModalFooter = ({ className, ...rest }: ModalFooterProps) => {
	const ref = useRef<HTMLDivElement>(null);
	useAbsoluteFooter(ref);

	return <ModalFooter ref={ref} className={cx(className, styles.absoluteFooter)} {...rest} />;
};

export { AbsoluteModalFooter };
