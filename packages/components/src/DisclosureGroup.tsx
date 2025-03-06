import type { Ref } from 'react';
import type { DisclosureGroupProps as AriaDisclosureGroupProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { DisclosureGroup as AriaDisclosureGroup } from 'react-aria-components';

import styles from './styles/DisclosureGroup.module.css';

const group = cva(styles.group);

interface DisclosureGroupProps extends AriaDisclosureGroupProps {
	ref?: Ref<HTMLDivElement>;
}

/**
 * A DisclosureGroup is a grouping of related disclosures, sometimes called an accordion. It supports both single and multiple expanded items.
 *
 * https://react-spectrum.adobe.com/react-aria/DisclosureGroup.html
 */
const DisclosureGroup = ({ className, ref, ...props }: DisclosureGroupProps) => {
	return <AriaDisclosureGroup {...props} ref={ref} className={group({ className })} />;
};

export { DisclosureGroup };
export type { DisclosureGroupProps };
