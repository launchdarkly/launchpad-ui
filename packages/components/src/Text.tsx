import type { Ref } from 'react';
import type { TextProps as AriaTextProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Text as AriaText } from 'react-aria-components';

import styles from './styles/Text.module.css';
import { useLPContextProps } from './utils';

const text = cva(styles.text);

interface TextProps extends AriaTextProps {
	ref?: Ref<HTMLElement>;
}

const TextContext = createContext<ContextValue<TextProps, HTMLElement>>(null);

const Text = ({ className, ref, ...props }: TextProps) => {
	[props, ref] = useLPContextProps(props, ref, TextContext);
	return <AriaText {...props} ref={ref} className={text({ className })} />;
};

export { Text, TextContext };
export type { TextProps };
