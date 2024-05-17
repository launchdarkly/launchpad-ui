import type { ElementType } from 'react';
import type { AriaButtonProps } from 'react-aria';

import { forwardRef, useRef } from 'react';
import { mergeProps, useButton, useFocusRing, useHover } from 'react-aria';

interface PressableProps<T extends ElementType = 'button'> extends AriaButtonProps<T> {}

const _Pressable = <T extends ElementType = 'span'>({
	children,
	elementType,
	...props
}: PressableProps<T>) => {
	const ref = useRef(null);
	const ElementType = elementType || 'span';

	const { buttonProps } = useButton(
		{
			...props,
			elementType: ElementType,
		},
		ref,
	);
	const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);
	const { hoverProps, isHovered } = useHover(props);

	return (
		<ElementType
			{...mergeProps(buttonProps, focusProps, hoverProps)}
			ref={ref}
			data-hovered={isHovered || undefined}
			data-focused={isFocused || undefined}
			data-focus-visible={isFocusVisible || undefined}
		>
			{children}
		</ElementType>
	);
};

const Pressable = forwardRef(_Pressable);

export { Pressable };
export type { PressableProps };
