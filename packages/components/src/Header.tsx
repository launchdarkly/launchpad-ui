import type { HTMLAttributes, Ref } from 'react';
import type { ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Header as AriaHeader } from 'react-aria-components';

import styles from './styles/Header.module.css';
import { useLPContextProps } from './utils';

const headerStyles = cva(styles.header);

interface HeaderProps extends HTMLAttributes<HTMLElement> {
	ref?: Ref<HTMLElement>;
}

const HeaderContext = createContext<ContextValue<HeaderProps, HTMLElement>>(null);

const Header = ({ ref, ...props }: HeaderProps) => {
	[props, ref] = useLPContextProps(props, ref, HeaderContext, 'Header');
	const { className } = props;

	return <AriaHeader {...props} ref={ref} className={headerStyles({ className })} />;
};

export { Header, HeaderContext, headerStyles };
export type { HeaderProps };
