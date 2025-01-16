import type { Ref } from 'react';
import type { SeparatorProps as AriaSeparatorProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { Separator as AriaSeparator } from 'react-aria-components';

import styles from './styles/Separator.module.css';

const separator = cva(styles.separator);

interface SeparatorProps extends AriaSeparatorProps {
	ref?: Ref<HTMLElement>;
}

const Separator = ({ className, ref, ...props }: SeparatorProps) => {
	return <AriaSeparator {...props} ref={ref} className={separator({ className })} />;
};

export { Separator };
export type { SeparatorProps };
