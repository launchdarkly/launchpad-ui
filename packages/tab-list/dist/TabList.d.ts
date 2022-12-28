import type { ItemElement } from '@react-types/shared';
import type { AriaTabListProps } from '@react-types/tabs';
import type { ReactNode } from 'react';
type TabListProps<T extends string | number> = (AriaTabListProps<HTMLDivElement> & {
    /** The active Tab to show on render. The value passed in here should match the value of the active Tab's Item key. */
    activeTab?: T;
    /** CSS classes to pass into the TabList wrapper div. */
    className?: string;
    /** The children passed into the TabList. This is a react-stately Item with JSX children. */
    children: ItemElement<ReactNode> | Array<ItemElement<ReactNode>>;
    /** Array of any disabled Tabs in the grouping. */
    disabledTabs?: string[];
    /** Called when the user clicks on a different tab */
    onChange?: (tab: T) => void;
    'data-test-id'?: string;
});
/** React-aria' useTabListState hook supports a
 * selectedKey under the hood for showing
 * the selected tab, and disabledKeys for disabling
 * tabs. The prop names are not very intuitive,
 * so we use activeTab and disabledTabs instead
 * and re-assign props at the component level
 * for an improved developer experience.
 */
declare const TabList: <T extends string | number>(props: AriaTabListProps<HTMLDivElement> & {
    /** The active Tab to show on render. The value passed in here should match the value of the active Tab's Item key. */
    activeTab?: T | undefined;
    /** CSS classes to pass into the TabList wrapper div. */
    className?: string | undefined;
    /** The children passed into the TabList. This is a react-stately Item with JSX children. */
    children: ItemElement<ReactNode> | Array<ItemElement<ReactNode>>;
    /** Array of any disabled Tabs in the grouping. */
    disabledTabs?: string[] | undefined;
    /** Called when the user clicks on a different tab */
    onChange?: ((tab: T) => void) | undefined;
    'data-test-id'?: string | undefined;
}) => JSX.Element;
export { TabList };
export type { TabListProps };
//# sourceMappingURL=TabList.d.ts.map