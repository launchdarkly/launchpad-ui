import type { MouseEvent, ReactElement } from 'react';
import type { NavItemProps } from './NavItem';
import type { NavItemWithTooltipProps } from './NavItemWithTooltip';

// The public interface for `NavigationItem` should include an `onClick` prop
// that receives an additional `state` param (determined by either
// `NavigationList` or `NavigationMenuDropdown`). The underlying `NavItem` and
// `NavItemWithTooltip` implementations pass their `onClick` directly through
// to `NavLink`, so we need to omit their `onClick` implementations for type
// correctness.
type NavigationItemProps = Omit<NavItemProps, 'onClick'> &
	Omit<NavItemWithTooltipProps, 'onClick'> & {
		tooltip?: boolean | ReactElement;
	} & {
		onClick?(e: MouseEvent, state: { collapsed: boolean }): void;
	};

/**
 * @deprecated use `Tabs` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-navigation-tabs--docs
 */
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
