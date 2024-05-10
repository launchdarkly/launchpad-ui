import type { ForwardedRef, HTMLAttributes } from 'react';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Header as AriaHeader } from 'react-aria-components';

import styles from './styles/Header.module.css';

const header = cva(styles.header);

const _Header = (
	{ className, ...props }: HTMLAttributes<HTMLElement>,
	ref: ForwardedRef<HTMLElement>,
) => {
	return <AriaHeader {...props} ref={ref} className={header({ className })} />;
};

const Header = forwardRef(_Header);

export { Header };
