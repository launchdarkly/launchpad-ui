import type { RefObject } from 'react';
import type {
	ListBoxSectionProps as AriaListBoxSectionProps,
	MenuSectionProps as AriaMenuSectionProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import {
	ListBoxSection as AriaListBoxSection,
	MenuSection as AriaMenuSection,
} from 'react-aria-components';

import styles from './styles/Section.module.css';

const section = cva(styles.section);

interface ListBoxSectionProps<T extends object> extends AriaListBoxSectionProps<T> {
	ref?: RefObject<HTMLElement | null>;
}

interface MenuSectionProps<T extends object> extends AriaMenuSectionProps<T> {
	ref?: RefObject<HTMLElement | null>;
}

/**
 * A ListBoxSection represents a section within a ListBox.
 */
const ListBoxSection = <T extends object>({ className, ref, ...props }: ListBoxSectionProps<T>) => {
	return <AriaListBoxSection {...props} ref={ref} className={section({ className })} />;
};

/**
 * A MenuSection represents a section within a Menu.
 */
const MenuSection = <T extends object>({ className, ref, ...props }: MenuSectionProps<T>) => {
	return <AriaMenuSection {...props} ref={ref} className={section({ className })} />;
};

export { ListBoxSection, MenuSection };
export type { ListBoxSectionProps, MenuSectionProps };
