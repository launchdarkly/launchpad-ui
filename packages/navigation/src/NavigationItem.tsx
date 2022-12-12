import type { NavigationClickState } from './Nav';
import type { NavItemProps } from './NavItem';
import type { NavItemWithTooltipProps } from './NavItemWithTooltip';
import type { ReactElement } from 'react';

type NavigationItemProps = NavItemProps &
  NavItemWithTooltipProps & {
    tooltip?: boolean | ReactElement;
    onItemSelected?: (e: MouseEvent | null, state: NavigationClickState) => void;
  };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavigationItem = (_props: NavigationItemProps) => {
  return null;
};

NavigationItem.getCollectionNode = function* (props: NavigationItemProps) {
  yield {
    type: 'item',
    props,
    'aria-label': props.name,
    hasChildNodes: false,
  };
};

export { NavigationItem };
export type { NavigationItemProps };
