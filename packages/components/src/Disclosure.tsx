import type { ForwardedRef } from 'react';
import type { DisclosurePanelProps, DisclosureProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	Disclosure as AriaDisclosure,
	DisclosurePanel as AriaDisclosurePanel,
} from 'react-aria-components';

import styles from './styles/Disclosure.module.css';

const disclosure = cva(styles.disclosure);
const panel = cva(styles.panel);

const _Disclosure = (
	{ className, ...props }: DisclosureProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return <AriaDisclosure {...props} ref={ref} className={disclosure({ className })} />;
};

/**
 * A disclosure is a collapsible section of content. It is composed of a header with a heading and trigger button, and a panel that contains the content.
 *
 * https://react-spectrum.adobe.com/react-aria/Disclosure.html
 */
const Disclosure = forwardRef(_Disclosure);

const _DisclosurePanel = (
	{ className, ...props }: DisclosurePanelProps,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return <AriaDisclosurePanel {...props} ref={ref} className={panel({ className })} />;
};

/**
 * A DisclosurePanel provides the content for a disclosure.
 *
 * https://react-spectrum.adobe.com/react-aria/Disclosure.html
 */
const DisclosurePanel = forwardRef(_DisclosurePanel);

export { Disclosure, DisclosurePanel };
export type { DisclosureProps, DisclosurePanelProps };
