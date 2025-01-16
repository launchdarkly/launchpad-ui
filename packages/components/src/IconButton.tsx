import type { IconProps } from '@launchpad-ui/icons';
import type { AriaLabelingProps } from '@react-types/shared';
import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';
import type { ButtonVariants } from './Button';

import { Icon } from '@launchpad-ui/icons';
import { cva, cx } from 'class-variance-authority';
import { useContext } from 'react';
import { Button as AriaButton, composeRenderProps } from 'react-aria-components';

import { button } from './Button';
import { PerceivableContext } from './Perceivable';
import styles from './styles/IconButton.module.css';

const iconButton = cva(styles.base, {
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

interface IconButtonVariants extends VariantProps<typeof iconButton> {
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

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 *
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */
const IconButton = ({
	size = 'medium',
	variant = 'default',
	icon,
	ref,
	...props
}: IconButtonProps) => {
	const ctx = useContext(PerceivableContext);
	return (
		<AriaButton
			{...props}
			{...ctx}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				cx(button({ ...renderProps, size, variant, className }), iconButton({ size })),
			)}
		>
			<Icon name={icon} size="small" aria-hidden />
		</AriaButton>
	);
};

export { IconButton, iconButton };
export type { IconButtonProps, IconButtonBaseProps };
