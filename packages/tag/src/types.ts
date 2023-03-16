import type { TagGroupProps } from './TagGroup';
import type { ButtonProps } from '@launchpad-ui/button';
import type { TagGroupState } from '@react-stately/tag';

type TagGroupActionProps<T extends object> = Omit<
  ButtonProps,
  'size' | 'kind' | 'aria-label' | 'data-test-id' | 'children'
> & {
  state?: TagGroupState<T>;
  size: TagGroupProps<T>['size'];
};

export type { TagGroupActionProps };
