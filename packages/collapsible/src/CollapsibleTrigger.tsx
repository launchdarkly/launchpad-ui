import type { ButtonProps } from '@launchpad-ui/button';

import { Button } from '@launchpad-ui/button';

type CollapsibleTriggerProps = {
  label: string;
  isOpen: boolean;
  toggleOpen: () => void;
  icon: ButtonProps['icon'];
  triggerProps: {
    'aria-expanded': boolean;
    'aria-controls': string;
    id: string;
    role: string;
  };
};

const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
  const { label, toggleOpen, icon, triggerProps } = props;

  return (
    <Button
      icon={icon}
      renderIconFirst
      kind="default"
      onClick={toggleOpen}
      data-test-id="collapsible-trigger"
      {...triggerProps}
    >
      {label}
    </Button>
  );
};

export { CollapsibleTrigger };
export type { CollapsibleTriggerProps };
