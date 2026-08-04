import type { Ref } from 'react';
import { createContext } from 'react';
import type { SeparatorProps as AriaSeparatorProps } from 'react-aria-components/Separator';
import { Separator as AriaSeparator } from 'react-aria-components/Separator';
import type { ContextValue } from 'react-aria-components/slots';
import { cva } from 'class-variance-authority';

import { useLPContextProps } from './utils';

import styles from './styles/Separator.module.css';

const separatorStyles = cva(styles.separator);

interface SeparatorProps extends AriaSeparatorProps {
	ref?: Ref<HTMLElement>;
}

const SeparatorContext = createContext<ContextValue<SeparatorProps, HTMLElement>>(null);

const Separator = ({ ref, ...props }: SeparatorProps) => {
	// oxlint-disable-next-line no-param-reassign -- sanctioned useLPContextProps merge pattern (see AGENTS.md context+prop-merging convention)
	[props, ref] = useLPContextProps(props, ref, SeparatorContext);
	const { className } = props;

	return <AriaSeparator {...props} ref={ref} className={separatorStyles({ className })} />;
};

export { Separator, SeparatorContext, separatorStyles };
export type { SeparatorProps };
