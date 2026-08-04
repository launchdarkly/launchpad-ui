import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { SeparatorContext } from 'react-aria-components/Separator';
import type { ContextValue } from 'react-aria-components/slots';
import { Provider } from 'react-aria-components/slots';
import { ToggleButtonGroupContext } from 'react-aria-components/ToggleButtonGroup';
import type { ToolbarProps as AriaToolbarProps } from 'react-aria-components/Toolbar';
import { Toolbar as AriaToolbar } from 'react-aria-components/Toolbar';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { ButtonGroupContext } from './ButtonGroup';
import { useLPContextProps } from './utils';

import styles from './styles/Toolbar.module.css';

const toolbarStyles = cva(styles.base, {
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

interface ToolbarProps extends AriaToolbarProps, VariantProps<typeof toolbarStyles> {
	ref?: Ref<HTMLDivElement>;
}

const ToolbarContext = createContext<ContextValue<ToolbarProps, HTMLDivElement>>(null);

/**
 * A toolbar is a container for a set of interactive controls, such as buttons, dropdown menus, or checkboxes, with arrow key navigation.
 *
 * https://react-spectrum.adobe.com/react-aria/Toolbar.html
 */
const Toolbar = ({ ref, ...props }: ToolbarProps) => {
	// oxlint-disable-next-line no-param-reassign -- sanctioned useLPContextProps merge pattern (see AGENTS.md context+prop-merging convention)
	[props, ref] = useLPContextProps(props, ref, ToolbarContext);
	const { spacing = 'basic' } = props;

	return (
		<AriaToolbar
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				toolbarStyles({ ...renderProps, spacing, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { orientation }) => (
				<Provider
					values={[
						[SeparatorContext, { orientation: orientation === 'horizontal' ? 'vertical' : 'horizontal' }],
						[ButtonGroupContext, { orientation }],
						[ToggleButtonGroupContext, { orientation }],
					]}
				>
					{children}
				</Provider>
			))}
		</AriaToolbar>
	);
};

export { Toolbar, ToolbarContext, toolbarStyles };
export type { ToolbarProps };
