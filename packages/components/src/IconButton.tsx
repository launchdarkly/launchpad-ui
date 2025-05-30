import type { IconProps } from '@launchpad-ui/icons';
import type { AriaLabelingProps } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { ButtonProps as AriaButtonProps, ContextValue } from 'react-aria-components';
import type { ButtonVariants } from './Button';

import { Icon } from '@launchpad-ui/icons';
import { cva, cx } from 'class-variance-authority';
import { createContext, useContext } from 'react';
import { Button as AriaButton, composeRenderProps } from 'react-aria-components';

import { buttonStyles } from './Button';
import { PerceivableContext } from './Perceivable';
import styles from './styles/IconButton.module.css';
import { useLPContextProps } from './utils';

const iconButtonStyles = cva(styles.base, {
	variants: {
		size: {
			small: styles.small,
			medium: styles.medium,
		},
	},
	defaultVariants: {
		size: 'medium',
	},
});

interface IconButtonVariants extends VariantProps<typeof iconButtonStyles> {
	variant?: Extract<ButtonVariants['variant'], 'default' | 'primary' | 'destructive' | 'minimal'>;
}

interface IconButtonBaseProps
	extends Required<Pick<AriaLabelingProps, 'aria-label'>>,
		IconButtonVariants {
	icon: IconProps['name'];
	children?: never;
}
interface IconButtonProps
	extends Omit<AriaButtonProps, 'children' | 'aria-label'>,
		IconButtonBaseProps {
	ref?: Ref<HTMLButtonElement>;
}

interface IconButtonContextValue extends IconButtonProps {
	isPressed?: boolean;
}

const IconButtonContext =
	createContext<ContextValue<IconButtonContextValue, HTMLButtonElement>>(null);

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 *
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */
const IconButton = ({ ref, ...props }: IconButtonProps) => {
	[props, ref] = useLPContextProps(props, ref, IconButtonContext);
	const perceivableProps = useContext(PerceivableContext);
	const { size = 'medium', variant = 'default', icon } = props;

	return (
		<AriaButton
			{...props}
			{...perceivableProps}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(buttonStyles({ ...renderProps, size, variant, className }), iconButtonStyles({ size })),
			)}
		>
			<Icon name={icon} size="small" aria-hidden />
		</AriaButton>
	);
};

export { IconButton, IconButtonContext, iconButtonStyles };
export type { IconButtonProps, IconButtonBaseProps };
