import type { Ref } from 'react';
import type {
	DisclosurePanelProps as AriaDisclosurePanelProps,
	DisclosureProps as AriaDisclosureProps,
	ContextValue,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Disclosure as AriaDisclosure,
	DisclosurePanel as AriaDisclosurePanel,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Disclosure.module.css';
import { useLPContextProps } from './utils';

const disclosure = cva(styles.disclosure);
const panel = cva(styles.panel);

interface DisclosureProps extends AriaDisclosureProps {
	ref?: Ref<HTMLDivElement>;
}

interface DisclosurePanelProps extends AriaDisclosurePanelProps {
	ref?: Ref<HTMLDivElement>;
}

const DisclosureContext = createContext<ContextValue<DisclosureProps, HTMLDivElement>>(null);

/**
 * A disclosure is a collapsible section of content. It is composed of a header with a heading and trigger button, and a panel that contains the content.
 *
 * https://react-spectrum.adobe.com/react-aria/Disclosure.html
 */
const Disclosure = ({ ref, ...props }: DisclosureProps) => {
	[props, ref] = useLPContextProps(props, ref, DisclosureContext);
	return (
		<AriaDisclosure
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				disclosure({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A DisclosurePanel provides the content for a disclosure.
 *
 * https://react-spectrum.adobe.com/react-aria/Disclosure.html
 */
const DisclosurePanel = ({ ref, ...props }: DisclosurePanelProps) => {
	return (
		<AriaDisclosurePanel
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				panel({ ...renderProps, className }),
			)}
		/>
	);
};

export { Disclosure, DisclosureContext, DisclosurePanel };
export type { DisclosureProps, DisclosurePanelProps };
