import type { PopoverProps } from '@launchpad-ui/popover';
import type { AriaAttributes, ForwardedRef, FunctionComponentElement, ReactElement } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { Popover } from '@launchpad-ui/popover';
import { mergeRefs } from '@react-aria/utils';
import { cx } from 'classix';
import { Children, cloneElement, useEffect, useRef, useState } from 'react';

type DropdownState = {
	isOpen?: boolean;
};

type DropdownProps<T extends string | object | number> = PopoverProps & {
	onSelect?: (item: T, stateChanges: DropdownState) => void;
	onStateChange?: (state: DropdownState) => void;
};

/**
 * @deprecated use `Menu` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-collections-menu--docs
 */
const Dropdown = <T extends string | object | number>(props: DropdownProps<T>) => {
	const {
		placement,
		disabled,
		targetClassName,
		popoverClassName,
		isOpen: isOpenProp,
		onInteraction,
		onSelect,
		onStateChange,
		children,
		'data-test-id': testId = 'dropdown',
		...rest
	} = props;

	const triggerRef = useRef<HTMLElement | null>(null);
	const [isOpen, setIsOpen] = useState(isOpenProp ?? false);
	const [hasOpened, setHasOpened] = useState(isOpen);

	useEffect(() => {
		if (isOpenProp !== undefined) {
			setIsOpen(isOpenProp);
		}
	}, [isOpenProp]);

	useEffect(() => {
		// Focus the button upon closing for convenient tabbing
		if (hasOpened && isOpen === false) {
			setTimeout(() => {
				const current = triggerRef.current;
				if (!current) {
					return;
				}

				// If a dropdown menu item triggers a modal, we do not want to focus the trigger. Instead
				// we let the modal components control their own focus.
				// Note that this is not ideal since closing the modal will not cause the dropdown trigger
				// to regain focus.
				const hasModal = current.closest?.('.has-overlay');

				!hasModal && current.focus?.();
			});
		}
	}, [isOpen, hasOpened]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: ignore
	useEffect(() => {
		setHasOpened(isOpen);
		onStateChange?.({ isOpen });
	}, [isOpen]);

	const renderTrigger = () => {
		const { target } = parseChildren();
		return cloneElement(target, {
			'aria-haspopup': true,
			'aria-expanded': !!isOpen,
			ref: target.ref ? mergeRefs(target.ref, triggerRef) : triggerRef,
			isopen: isOpen?.toString(),
		});
	};

	const renderContent = () => {
		return cloneElement(parseChildren().content, {
			onSelect: handleSelect,
		});
	};

	const handleSelect = (item: T) => {
		setIsOpen(false);
		onSelect?.(item, { isOpen: false });
	};

	const handlePopoverInteraction = (nextIsOpen: boolean) => {
		setIsOpen(nextIsOpen);
	};

	const parseChildren = () => {
		const [targetChild, contentChild] = Children.toArray(children);
		return {
			target: targetChild as FunctionComponentElement<
				AriaAttributes & { ref: ForwardedRef<HTMLElement | undefined>; isopen: string }
			>,
			// biome-ignore lint/suspicious/noExplicitAny: ignore
			content: contentChild as ReactElement<any>,
		};
	};

	const popoverTargetClasses = cx('Dropdown-target', targetClassName);
	const popoverClasses = cx('Dropdown', popoverClassName);

	return (
		<Popover
			{...addLaunchPadAttribution('Dropdown')}
			isOpen={isOpen}
			placement={placement}
			onInteraction={onInteraction || handlePopoverInteraction}
			restrictHeight={false}
			disabled={disabled}
			targetClassName={popoverTargetClasses}
			popoverClassName={popoverClasses}
			data-test-id={testId}
			{...rest}
		>
			{renderTrigger()}
			{renderContent()}
		</Popover>
	);
};

export { Dropdown };
export type { DropdownProps };
