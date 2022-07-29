/* eslint-disable functional/no-class */
import type { Button } from '@launchpad-ui/button';
import type { PopoverPlacement } from '@launchpad-ui/popover';

import { Popover } from '@launchpad-ui/popover';
import cx from 'clsx';
import { Children, cloneElement, Component } from 'react';

type DropdownState = {
  isOpen?: boolean;
} & Record<string | number, unknown>;

type DropdownProps<T extends string | object | number> = {
  isOpen?: boolean;
  placement?: PopoverPlacement;
  onSelect?: (item: T, stateChanges: DropdownState) => void;
  onStateChange?: (state: Record<string | number, unknown>) => void;
  disabled?: boolean;
  targetClassName?: string;
  children: React.ReactNode;
  onInteraction?: (nextIsOpen: boolean) => void;
  popoverClassName?: string;
  enforceFocus?: boolean;
  [key: string]: unknown;
};

class Dropdown<T extends string | object | number> extends Component<
  DropdownProps<T>,
  DropdownState
> {
  triggerElement: HTMLElement | null | typeof Button = null;
  refHandlers = {
    trigger: (node: HTMLElement | null | typeof Button) => {
      this.triggerElement = node;
    },
  };

  state = {
    isOpen: this.isControlledProp('isOpen') ? (this.props.isOpen as boolean) : false,
  };

  componentDidUpdate(prevProps: DropdownProps<T>, prevState: DropdownState) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }

    // Focus the button upon closing for convenient tabbing
    if (prevState.isOpen !== this.state.isOpen && this.state.isOpen === false) {
      setTimeout(() => {
        const current = this.triggerElement as HTMLElement;
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
  }

  render() {
    const {
      placement,
      disabled,
      targetClassName,
      popoverClassName,
      isOpen: isOpenProp,
      onInteraction,
      ...rest
    } = this.props;
    const { isOpen } = this.state;
    const popoverTargetClasses = cx('Dropdown-target', targetClassName);
    const popoverClasses = cx('Dropdown', popoverClassName);

    return (
      <Popover
        isOpen={isOpen}
        placement={placement}
        onInteraction={onInteraction || this.handlePopoverInteraction}
        restrictHeight={false}
        disabled={disabled}
        targetClassName={popoverTargetClasses}
        popoverClassName={popoverClasses}
        {...rest}
      >
        {this.renderTrigger()}
        {this.renderContent()}
      </Popover>
    );
  }

  renderTrigger() {
    return cloneElement(this.parseChildren().target, {
      'aria-haspopup': true,
      'aria-expanded': this.state.isOpen ? true : false,
      ref: this.refHandlers.trigger,
      isopen: this.state.isOpen?.toString(),
    });
  }

  renderContent() {
    return cloneElement(this.parseChildren().content, {
      onSelect: this.handleSelect,
    });
  }

  handleSelect = (item: T) => {
    this.updateState({ isOpen: false }, item);
  };

  handlePopoverInteraction = (nextIsOpen: boolean) => {
    this.updateState({ isOpen: nextIsOpen });
  };

  parseChildren() {
    const [targetChild, contentChild] = Children.toArray(this.props.children);
    return {
      target: targetChild as React.ReactElement,
      content: contentChild as React.ReactElement,
    };
  }

  updateState(state: DropdownState, selectedItem?: T) {
    const nextState: DropdownState = {};
    const stateChanges: DropdownState = {};
    this.setState(
      (currentState) => {
        Object.keys(state).forEach((key) => {
          if (currentState[key] !== state[key]) {
            stateChanges[key] = state[key];
          }

          if (!this.isControlledProp(key)) {
            nextState[key] = state[key];
          }
        });

        return nextState;
      },
      () => {
        if (selectedItem !== undefined && selectedItem !== null) {
          this.props.onSelect?.(selectedItem, stateChanges);
        }

        if (Object.keys(stateChanges).length) {
          this.props.onStateChange?.(stateChanges);
        }
      }
    );
  }

  isControlledProp(key: string) {
    return this.props[key] !== undefined;
  }
}

export { Dropdown };
export type { DropdownProps };
