import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { ToolbarProps as AriaToolbarProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { Toolbar as AriaToolbar, composeRenderProps } from 'react-aria-components';

import styles from './styles/Toolbar.module.css';
import { useLPContextProps } from './utils';

const toolbar = cva(styles.base, {
	variants: {
		spacing: {
			basic: styles.basic,
			compact: styles.compact,
			large: styles.large,
		},
	},
	defaultVariants: {
		spacing: 'basic',
	},
});

interface ToolbarProps extends AriaToolbarProps, VariantProps<typeof toolbar> {
	ref?: Ref<HTMLDivElement>;
}

const ToolbarContext = createContext<ContextValue<ToolbarProps, HTMLDivElement>>(null);

/**
 * A toolbar is a container for a set of interactive controls, such as buttons, dropdown menus, or checkboxes, with arrow key navigation.
 *
 * https://react-spectrum.adobe.com/react-aria/Toolbar.html
 */
const Toolbar = ({ ref, ...props }: ToolbarProps) => {
	[props, ref] = useLPContextProps(props, ref, ToolbarContext);
	const { spacing = 'basic' } = props;

	return (
		<AriaToolbar
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				toolbar({ ...renderProps, spacing, className }),
			)}
		/>
	);
};

export { Toolbar, ToolbarContext };
export type { ToolbarProps };
