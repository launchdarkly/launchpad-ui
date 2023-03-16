import type { TagGroupActionProps } from './types';

import { Button } from '@launchpad-ui/button';

const TagGroupClearAction = <T extends object>({
  size,
  state: _state,
  ...props
}: TagGroupActionProps<T>) => {
  return (
    <Button
      {...props}
      size={size === 'small' ? 'tiny' : 'small'}
      kind="minimal"
      data-test-id="tag-group-action-btn"
      aria-label="Clear"
    >
      Clear
    </Button>
  );
};

export { TagGroupClearAction };
