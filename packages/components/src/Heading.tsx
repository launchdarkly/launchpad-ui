import type { ForwardedRef } from 'react';
import type { HeadingProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Heading as AriaHeading } from 'react-aria-components';

import styles from './styles/Heading.module.css';

const heading = cva(styles.heading);

const _Heading = ({ className, ...props }: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => {
	return <AriaHeading {...props} ref={ref} className={heading({ className })} />;
};

const Heading = forwardRef(_Heading);

export { Heading };
export type { HeadingProps };
