import type { PopoverProps } from '@launchpad-ui/popover';
import type { ReactElement } from 'react';

import { Popover } from '@launchpad-ui/popover';
import { cx } from 'classix';
import { Children, cloneElement, useEffect, useRef, useState } from 'react';

type DropdownState = {
  isOpen?: boolean;
};

type DropdownProps<T extends string | object | number> = PopoverProps & {
  onSelect?: (item: T, stateChanges: DropdownState) => void;
  onStateChange?: (state: DropdownState) => void;
};

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

  const triggerRef = useRef<HTMLElement>(null);
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
        const hasModal = current.closest?.('.has-modal');

        !hasModal && current.focus?.();
      });
    }
  }, [isOpen, hasOpened]);

  useEffect(() => {
    setHasOpened(isOpen);
    onStateChange?.({ isOpen });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const renderTrigger = () => {
    return cloneElement(parseChildren().target, {
      'aria-haspopup': true,
      'aria-expanded': isOpen ? true : false,
      ref: triggerRef,
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
      target: targetChild as ReactElement,
      content: contentChild as ReactElement,
    };
  };

  const popoverTargetClasses = cx('Dropdown-target', targetClassName);
  const popoverClasses = cx('Dropdown', popoverClassName);

  return (
    <Popover
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
