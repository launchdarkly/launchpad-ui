import type { Ref } from 'react';
import type { TextProps as AriaTextProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Text as AriaText } from 'react-aria-components';

import styles from './styles/Text.module.css';
import { useLPContextProps } from './utils';

const textStyles = cva(styles.text);

interface TextProps extends AriaTextProps {
	ref?: Ref<HTMLElement>;
}

const TextContext = createContext<ContextValue<TextProps, HTMLElement>>(null);

const Text = ({ ref, ...props }: TextProps) => {
	[props, ref] = useLPContextProps(props, ref, TextContext);
	const { className } = props;

	return <AriaText {...props} ref={ref} className={textStyles({ className })} />;
};

export { Text, TextContext, textStyles };
export type { TextProps };
