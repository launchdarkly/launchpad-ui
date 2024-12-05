import type { forwardRefType } from '@react-types/shared';
import type { ForwardedRef } from 'react';
import type { ListBoxSectionProps, MenuSectionProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	ListBoxSection as AriaListBoxSection,
	MenuSection as AriaMenuSection,
} from 'react-aria-components';

import styles from './styles/Section.module.css';

const section = cva(styles.section);

const _ListBoxSection = <T extends object>(
	{ className, ...props }: ListBoxSectionProps<T>,
	ref: ForwardedRef<HTMLElement>,
) => {
	return <AriaListBoxSection {...props} ref={ref} className={section({ className })} />;
};

/**
 * A ListBoxSection represents a section within a ListBox.
 */
const ListBoxSection = (forwardRef as forwardRefType)(_ListBoxSection);

const _MenuSection = <T extends object>(
	{ className, ...props }: MenuSectionProps<T>,
	ref: ForwardedRef<HTMLElement>,
) => {
	return <AriaMenuSection {...props} ref={ref} className={section({ className })} />;
};

/**
 * A MenuSection represents a section within a Menu.
 */
const MenuSection = (forwardRef as forwardRefType)(_MenuSection);

export { ListBoxSection, MenuSection };
export type { ListBoxSectionProps, MenuSectionProps };
