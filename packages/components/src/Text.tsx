import type { ForwardedRef } from 'react';
import type { TextProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Text as AriaText } from 'react-aria-components';

import styles from './styles/Text.module.css';

const text = cva(styles.text);

const _Text = ({ className, ...props }: TextProps, ref: ForwardedRef<HTMLElement>) => {
  return <AriaText {...props} ref={ref} className={text({ className })} />;
};

const Text = forwardRef(_Text);

export { Text };
export type { TextProps };
