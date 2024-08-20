import type { forwardRefType } from '@react-types/shared';
import type { ForwardedRef } from 'react';
import type { SectionProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Section as AriaSection } from 'react-aria-components';

import styles from './styles/Section.module.css';

const section = cva(styles.section);

const _Section = <T extends object>(
	{ className, ...props }: SectionProps<T>,
	ref: ForwardedRef<HTMLElement>,
) => {
	return <AriaSection {...props} ref={ref} className={section({ className })} />;
};

const Section = (forwardRef as forwardRefType)(_Section);

export { Section };
export type { SectionProps };
