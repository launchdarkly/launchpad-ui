import type { Ref } from 'react';
import type { TextProps as AriaTextProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { Text as AriaText } from 'react-aria-components';

import styles from './styles/Text.module.css';

const text = cva(styles.text);

interface TextProps extends AriaTextProps {
	ref?: Ref<HTMLElement>;
}

const Text = ({ className, ref, ...props }: TextProps) => {
	return <AriaText {...props} ref={ref} className={text({ className })} />;
};

export { Text };
export type { TextProps };
