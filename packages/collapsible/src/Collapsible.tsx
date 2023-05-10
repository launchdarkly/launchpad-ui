import type { CollapsibleTriggerProps } from './CollapsibleTrigger';
import type { ComponentProps, ReactNode } from 'react';

import { ExpandLess, ExpandMore } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { useId, useRef, useState } from 'react';

import { CollapsibleTrigger } from './CollapsibleTrigger';
import styles from './styles/Collapsible.module.css';

type CollapsibleProps = Omit<ComponentProps<'div'>, 'className'> & {
  label: string | ((isOpen: boolean) => string);
  trigger?: (props: CollapsibleTriggerProps) => ReactNode;
  onToggle?: (isOpen: boolean) => void;
  defaultOpen?: boolean;
  // sets the content to display: none instead of removing from the DOM entirely
  keepContentInDomWhenClosed?: boolean;
  'data-test-id'?: string;
};

const Collapsible = (props: CollapsibleProps) => {
  const {
    children,
    defaultOpen = false,
    onToggle,
    trigger = CollapsibleTrigger,
    keepContentInDomWhenClosed = false,
    'data-test-id': testId = 'collapsible',
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { current: triggerId } = useRef(`collapsible-trigger-${useId()}`);
  const { current: panelId } = useRef(`collapsible-panel-${useId()}`);

  const toggleOpen = () => {
    const value = !isOpen;

    if (onToggle) onToggle(value);

    setIsOpen(value);
  };

  const label = typeof props.label === 'string' ? props.label : props.label(isOpen);

  const icon = isOpen ? <ExpandLess /> : <ExpandMore />;

  const renderedTrigger = trigger({
    label,
    isOpen,
    icon,
    toggleOpen,
    triggerProps: {
      'aria-expanded': isOpen,
      'aria-controls': panelId,
      id: triggerId,
      role: 'button',
    },
  });

  return (
    <div data-test-id={testId} {...rest}>
      <div className={cx(styles.trigger, isOpen && styles.isOpen)}>{renderedTrigger}</div>
      <div id={panelId} aria-labelledby={triggerId} role="region">
        {keepContentInDomWhenClosed ? (
          <div style={{ display: isOpen ? 'block' : 'none' }}>{children}</div>
        ) : (
          isOpen && children
        )}
      </div>
    </div>
  );
};

export { Collapsible };
export type { CollapsibleProps };
