import type { Ref } from 'react';
import type { HeadingProps as AriaHeadingProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Heading as AriaHeading } from 'react-aria-components';

import styles from './styles/Heading.module.css';
import { useLPContextProps } from './utils';

const heading = cva(styles.heading);

interface HeadingProps extends AriaHeadingProps {
	ref?: Ref<HTMLHeadingElement>;
}

const HeadingContext = createContext<ContextValue<HeadingProps, HTMLHeadingElement>>(null);

const Heading = ({ ref, ...props }: HeadingProps) => {
	[props, ref] = useLPContextProps(props, ref, HeadingContext);
	const { className } = props;

	return <AriaHeading {...props} ref={ref} className={heading({ className })} />;
};

export { Heading, HeadingContext };
export type { HeadingProps };
