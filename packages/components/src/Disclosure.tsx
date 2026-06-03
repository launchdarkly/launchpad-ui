import type { Ref } from 'react';
import type {
	DisclosurePanelProps as AriaDisclosurePanelProps,
	DisclosureProps as AriaDisclosureProps,
} from 'react-aria-components/Disclosure';
import type { ContextValue } from 'react-aria-components/slots';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import {
	Disclosure as AriaDisclosure,
	DisclosurePanel as AriaDisclosurePanel,
} from 'react-aria-components/Disclosure';

import styles from './styles/Disclosure.module.css';
import { useLPContextProps } from './utils';

const disclosureStyles = cva(styles.disclosure);
const disclosurePanelStyles = cva(styles.panel);

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
				disclosureStyles({ ...renderProps, className }),
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
				disclosurePanelStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { Disclosure, DisclosureContext, DisclosurePanel, disclosurePanelStyles, disclosureStyles };
export type { DisclosureProps, DisclosurePanelProps };
