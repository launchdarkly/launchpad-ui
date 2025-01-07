import type { RefObject } from 'react';
import type {
	DisclosurePanelProps as AriaDisclosurePanelProps,
	DisclosureProps as AriaDisclosureProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import {
	Disclosure as AriaDisclosure,
	DisclosurePanel as AriaDisclosurePanel,
} from 'react-aria-components';

import styles from './styles/Disclosure.module.css';

const disclosure = cva(styles.disclosure);
const panel = cva(styles.panel);

interface DisclosureProps extends AriaDisclosureProps {
	ref?: RefObject<HTMLDivElement | null>;
}

interface DisclosurePanelProps extends AriaDisclosurePanelProps {
	ref?: RefObject<HTMLDivElement | null>;
}

/**
 * A disclosure is a collapsible section of content. It is composed of a header with a heading and trigger button, and a panel that contains the content.
 *
 * https://react-spectrum.adobe.com/react-aria/Disclosure.html
 */
const Disclosure = ({ className, ref, ...props }: DisclosureProps) => {
	return <AriaDisclosure {...props} ref={ref} className={disclosure({ className })} />;
};

/**
 * A DisclosurePanel provides the content for a disclosure.
 *
 * https://react-spectrum.adobe.com/react-aria/Disclosure.html
 */
const DisclosurePanel = ({ className, ref, ...props }: DisclosurePanelProps) => {
	return <AriaDisclosurePanel {...props} ref={ref} className={panel({ className })} />;
};

export { Disclosure, DisclosurePanel };
export type { DisclosureProps, DisclosurePanelProps };
