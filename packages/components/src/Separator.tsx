import type { Ref } from 'react';
import type { SeparatorProps as AriaSeparatorProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Separator as AriaSeparator } from 'react-aria-components';

import styles from './styles/Separator.module.css';
import { useLPContextProps } from './utils';

const separator = cva(styles.separator);

interface SeparatorProps extends AriaSeparatorProps {
	ref?: Ref<HTMLElement>;
}

const SeparatorContext = createContext<ContextValue<SeparatorProps, HTMLElement>>(null);

const Separator = ({ ref, ...props }: SeparatorProps) => {
	[props, ref] = useLPContextProps(props, ref, SeparatorContext);
	const { className } = props;

	return <AriaSeparator {...props} ref={ref} className={separator({ className })} />;
};

export { Separator, SeparatorContext };
export type { SeparatorProps };
