import type { TagGroupProps } from './TagGroup';
import type { ButtonProps } from '@launchpad-ui/button';
import type { ListState } from '@react-stately/list';

type TagGroupActionProps<T extends object> = Omit<
  ButtonProps,
  'size' | 'kind' | 'aria-label' | 'data-test-id' | 'children'
> & {
  state?: ListState<T>;
  size: TagGroupProps<T>['size'];
};

export type { TagGroupActionProps };
