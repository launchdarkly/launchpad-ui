import type { TagGroupActionProps } from './types';

import { Button } from '@launchpad-ui/button';

const TagGroupClearAction = <T extends object>(props: TagGroupActionProps<T>) => {
  return (
    <Button
      {...props}
      size="small"
      kind="minimal"
      data-test-id="tag-group-action-btn"
      aria-label="Clear"
    >
      Clear
    </Button>
  );
};

export { TagGroupClearAction };
