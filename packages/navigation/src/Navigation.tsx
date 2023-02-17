import type { CollectionBase } from '@react-types/shared';

import { useResizeObserver, useValueEffect } from '@react-aria/utils';
import { cx } from 'classix';
import { useCallback, useLayoutEffect, useRef } from 'react';

import { NavigationContext } from './NavigationContext';
import { NavigationList } from './NavigationList';
import styles from './styles/Navigation.module.css';

type NavigationProps<T extends object> = CollectionBase<T> & {
  title: string;
  kind?: 'primary' | 'secondary';
  role?: string;
  'data-test-id'?: string;
  className?: string;
};

type NavigationState = {
  collapsed: boolean;
};

const Navigation = <T extends object>(props: NavigationProps<T>) => {
  const { children, className, 'data-test-id': testId = 'navigation' } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldCollapse, setCollapse] = useValueEffect(false);

  const checkShouldCollapse = useCallback(() => {
    function computeShouldCollapse() {
      if (!containerRef.current) {
        return false;
      }

      const nav = containerRef.current.querySelector('nav');

      return nav && nav.scrollWidth > nav.offsetWidth;
    }

    setCollapse(function* () {
      // Make Tabs render in non-collapsed state
      yield false;

      // Compute if Tabs should collapse and update
      yield computeShouldCollapse();
    });
  }, [containerRef, setCollapse]);

  useLayoutEffect(() => {
    checkShouldCollapse();
  }, [children, checkShouldCollapse]);

  useResizeObserver({ ref: containerRef, onResize: checkShouldCollapse });
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
            containerRef,
          },
        }}
      >
        <NavigationList {...props} />
      </NavigationContext.Provider>
    </div>
  );
};

export { Navigation };
export type { NavigationProps, NavigationState };
