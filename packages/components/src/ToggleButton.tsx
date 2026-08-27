import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import type { ToggleButtonProps as AriaToggleButtonProps } from 'react-aria-components/ToggleButton';
import { ToggleButton as AriaToggleButton } from 'react-aria-components/ToggleButton';
import { cva } from 'class-variance-authority';

import type { IconProps } from '@launchpad-ui/icons';
import { Icon } from '@launchpad-ui/icons';

import type { ButtonVariants } from './Button';
import { buttonStyles } from './Button';
import { useLPContextProps } from './utils';

import elevatedStyles from './styles/ToggleButton.module.css';

const toggleButtonElevatedStyles = cva(elevatedStyles.elevated);

interface ToggleButtonProps extends AriaToggleButtonProps, ButtonVariants {
	/** Visual appearance of the toggle button. Use `"elevated"` inside a `ToggleButtonGroup` with `appearance="elevated"`. */
	appearance?: 'default' | 'elevated';
	/** Leading icon shown while the button is not selected. Replaced by `selectedIcon` on selection. */
	icon?: IconProps['name'];
	/**
	 * Leading icon shown while the button is selected. Defaults to `"check-circle"`, and to `null` when
	 * `appearance="elevated"` — the elevated appearance already signals selection through its raised surface.
	 * Pass `null` to render no icon when selected.
	 */
	selectedIcon?: IconProps['name'] | null;
	ref?: Ref<HTMLButtonElement>;
}

const ToggleButtonContext = createContext<ContextValue<ToggleButtonProps, HTMLButtonElement>>(null);

/**
 * A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.
 *
 * Selecting a button swaps its leading icon for `selectedIcon`, so a selected button shows a single icon rather
 * than both. The elevated appearance opts out of this and shows no selected icon.
 *
 * https://react-spectrum.adobe.com/react-aria/ToggleButton.html
 */
const ToggleButton = ({ ref, ...props }: ToggleButtonProps) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, ToggleButtonContext);
	const {
		appearance = 'default',
		size = 'medium',
		variant = 'default',
		icon,
		selectedIcon = appearance === 'elevated' ? null : 'check-circle',
	} = mergedProps;

	return (
		<AriaToggleButton
			{...mergedProps}
			ref={mergedRef}
			data-lp-variant={variant}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				appearance === 'elevated'
					? toggleButtonElevatedStyles({ ...renderProps, className })
					: buttonStyles({ ...renderProps, size, variant, className }),
			)}
		>
			{composeRenderProps(mergedProps.children, (children, { isSelected }) => {
				const name = isSelected ? selectedIcon : icon;

				return (
					<>
						{name ? <Icon name={name} size="small" aria-hidden /> : null}
						{children}
					</>
				);
			})}
		</AriaToggleButton>
	);
};

export { ToggleButton, ToggleButtonContext, toggleButtonElevatedStyles };
export type { ToggleButtonProps };
