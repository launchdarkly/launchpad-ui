import type { HTMLAttributes, Ref } from 'react';

import { cva } from 'class-variance-authority';
import { Header as AriaHeader } from 'react-aria-components';

import styles from './styles/Header.module.css';

const header = cva(styles.header);

interface HeaderProps extends HTMLAttributes<HTMLElement> {
	ref?: Ref<HTMLElement>;
}

const Header = ({ className, ref, ...props }: HeaderProps) => {
	return <AriaHeader {...props} ref={ref} className={header({ className })} />;
};

export { Header };
export type { HeaderProps };
