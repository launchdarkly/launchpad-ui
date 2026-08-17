import type { ComponentProps } from 'react';
import { cx } from 'classix';

import styles from './styles/Chip.module.css';

// The small status label rendered next to a navigation item. It previously
// came from `@launchpad-ui/chip`, which is deprecated and is no longer part of
// this workspace, so the markup and styles live here unchanged. Only the
// navigation usage is kept: no icon and no click handling.
type ChipKind = 'success' | 'warning' | 'error' | 'info' | 'new' | 'beta' | 'federal';

type ChipProps = ComponentProps<'span'> & {
	kind?: ChipKind;
	size?: 'tiny' | 'small';
	'data-test-id'?: string;
};

const Chip = ({ kind, className, children, size = 'small', 'data-test-id': testId = 'chip', ...rest }: ChipProps) => {
	return (
		<span className={cx(styles.chip, kind && styles[kind], styles[size], className)} data-test-id={testId} {...rest}>
			{children}
		</span>
	);
};

export { Chip };
export type { ChipKind, ChipProps };
