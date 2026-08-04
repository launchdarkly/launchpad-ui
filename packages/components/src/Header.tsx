import type { HTMLAttributes, Ref } from 'react';
import { createContext } from 'react';
import { Header as AriaHeader } from 'react-aria-components/Header';
import type { ContextValue } from 'react-aria-components/slots';
import { cva } from 'class-variance-authority';

import { useLPContextProps } from './utils';

import styles from './styles/Header.module.css';

const headerStyles = cva(styles.header);

interface HeaderProps extends HTMLAttributes<HTMLElement> {
	ref?: Ref<HTMLElement>;
}

const HeaderContext = createContext<ContextValue<HeaderProps, HTMLElement>>(null);

const Header = ({ ref, ...props }: HeaderProps) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, HeaderContext);
	const { className } = mergedProps;

	return <AriaHeader {...mergedProps} ref={mergedRef} className={headerStyles({ className })} />;
};

export { Header, HeaderContext, headerStyles };
export type { HeaderProps };
