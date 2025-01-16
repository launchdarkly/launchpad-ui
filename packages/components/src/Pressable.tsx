import type { ElementType, HTMLAttributes, Ref } from 'react';
import type { AriaButtonProps, HoverEvents } from 'react-aria';

import { useObjectRef } from '@react-aria/utils';
import { cva } from 'class-variance-authority';
import { mergeProps, useButton, useFocusRing, useHover } from 'react-aria';

import styles from './styles/Pressable.module.css';

const pressable = cva(styles.pressable);

interface PressableProps<T extends ElementType = 'button'>
	extends AriaButtonProps<T>,
		HoverEvents,
		Pick<HTMLAttributes<T>, 'className'> {
	ref?: Ref<HTMLElement>;
}

const Pressable = <T extends ElementType = 'span'>({
	children,
	elementType,
	className,
	ref,
	...props
}: PressableProps<T>) => {
	const domRef = useObjectRef(ref);
	const ElementType = elementType || 'span';

	const { buttonProps, isPressed } = useButton(
		{
			...props,
			elementType: ElementType,
		},
		domRef,
	);
	const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);
	const { hoverProps, isHovered } = useHover(props);

	return (
		<ElementType
			{...mergeProps(buttonProps, focusProps, hoverProps)}
			className={pressable({ className })}
			ref={domRef}
			data-disabled={props.isDisabled || undefined}
			data-pressed={isPressed || undefined}
			data-hovered={isHovered || undefined}
			data-focused={isFocused || undefined}
			data-focus-visible={isFocusVisible || undefined}
		>
			{children}
		</ElementType>
	);
};

export { Pressable };
export type { PressableProps };
