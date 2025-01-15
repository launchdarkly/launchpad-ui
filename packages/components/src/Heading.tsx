import type { RefObject } from 'react';
import type { HeadingProps as AriaHeadingProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { Heading as AriaHeading } from 'react-aria-components';

import styles from './styles/Heading.module.css';

const heading = cva(styles.heading);

interface HeadingProps extends AriaHeadingProps {
	ref?: RefObject<HTMLHeadingElement | null>;
}

const Heading = ({ className, ref, ...props }: HeadingProps) => {
	return <AriaHeading {...props} ref={ref} className={heading({ className })} />;
};

export { Heading };
export type { HeadingProps };
