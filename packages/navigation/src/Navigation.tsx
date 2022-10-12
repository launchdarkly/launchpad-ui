import type { NavProps } from './Nav';
import type { CollectionBase } from '@react-types/shared';

import { useResizeObserver, useValueEffect } from '@react-aria/utils';
import { cx } from 'classix';
import { useCallback, useEffect, useRef } from 'react';

import { NavigationContext } from './NavigationContext';
import { NavigationList } from './NavigationList';
import styles from './styles/Navigation.module.css';
import { useMediaQuery } from './utils';

type NavigationProps<T extends object> = CollectionBase<T> & {
  title: string;
  kind?: NavProps['kind'];
  role?: string;
  'data-test-id'?: string;
  className?: string;
};

const Navigation = <T extends object>(props: NavigationProps<T>) => {
  const { children, className, 'data-test-id': testId = 'navigation' } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const itemListRef = useRef<HTMLDivElement>(null);
  const [shouldCollapse, setCollapse] = useValueEffect(false);

  const isWideViewport = useMediaQuery('(min-width: 740px)');

  // From react-spectrum: https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/tabs/src/Tabs.tsx#L82
  const checkShouldCollapse = useCallback(() => {
    function computeShouldCollapse() {
      if (!wrapperRef.current || !itemListRef.current) {
        return false;
      }

      // This is where we're explicitly tied to NavItem
      const tabs = itemListRef.current.querySelectorAll("[data-nav-target='true']");
      const lastTab = tabs[tabs.length - 1];

      const containerEdge = wrapperRef.current.getBoundingClientRect().right;
      const lastTabEdge = lastTab?.getBoundingClientRect().right;

      return containerEdge < lastTabEdge;
    }

    setCollapse(function* () {
      if (isWideViewport) {
        yield false;
        return;
      }

      // Make Tabs render in non-collapsed state
      yield false;

      // Compute if Tabs should collapse and update
      yield computeShouldCollapse();
    });
  }, [wrapperRef, itemListRef, isWideViewport, setCollapse]);

  useEffect(() => {
    checkShouldCollapse();
  }, [children, checkShouldCollapse, isWideViewport]);

  useResizeObserver({ ref: wrapperRef, onResize: checkShouldCollapse });

  return (
    <div
      className={cx(
        styles.Navigation,
        shouldCollapse && styles['Navigation--collapsed'],
        className
      )}
      data-test-id={testId}
    >
      <NavigationContext.Provider
        value={{
          shouldCollapse,
          refs: {
            wrapperRef,
            itemListRef,
          },
        }}
      >
        <NavigationList {...props} />
      </NavigationContext.Provider>
    </div>
  );
};

export { Navigation };
export type { NavigationProps };
