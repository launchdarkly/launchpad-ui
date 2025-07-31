import { cva, cx } from 'class-variance-authority';
import { forwardRef } from 'react';

import styles from './styles/Code.module.css';

const codeStyles = cva(styles.default, {
	variants: {
		size: {
			small: styles.small,
			medium: styles.medium,
		},
	},
	defaultVariants: {
		size: 'small',
	},
});

export interface CodeProps extends Omit<React.HTMLAttributes<HTMLElement>, 'className'> {
	children: React.ReactNode;
	/** Text size */
	size?: 'small' | 'medium';
	/** Optional CSS class name */
	className?: string;
}

/**
 * A Code component for displaying inline code snippets.
 *
 * For body text, use `Text`. For headings, use `Heading`. For labels, use `Label`.
 */
const Code = forwardRef<HTMLElement, CodeProps>(({ children, size, className, ...props }, ref) => {
	return (
		<code {...props} ref={ref} className={cx(codeStyles({ size }), styles.code, className)}>
			{children}
		</code>
	);
});

Code.displayName = 'Code';

export { Code };
