import type { ForwardedRef } from 'react';
import type { SeparatorProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Separator as AriaSeparator } from 'react-aria-components';

import styles from './styles/Separator.module.css';

const separator = cva(styles.separator);

const _Separator = ({ className, ...props }: SeparatorProps, ref: ForwardedRef<HTMLElement>) => {
	return <AriaSeparator {...props} ref={ref} className={separator({ className })} />;
};

const Separator = forwardRef(_Separator);

export { Separator };
export type { SeparatorProps };
