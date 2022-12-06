import type { NavProps } from './Nav';
import type { CollectionBase } from '@react-types/shared';

import { useResizeObserver, useValueEffect } from '@react-aria/utils';
import { cx } from 'classix';
import { useCallback, useEffect, useRef } from 'react';

import { NavigationContext } from './NavigationContext';
import { NavigationList } from './NavigationList';
import styles from './styles/Navigation.module.css';

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

  const checkShouldCollapse = useCallback(() => {
    function computeShouldCollapse() {
      if (!wrapperRef.current || !itemListRef.current) {
        return false;
      }

      const nav = wrapperRef.current.querySelector('nav');

      return nav && nav.scrollWidth > nav.offsetWidth;
    }

    setCollapse(function* () {
      // Make Tabs render in non-collapsed state
      yield false;

      // Compute if Tabs should collapse and update
      yield computeShouldCollapse();
    });
  }, [wrapperRef, itemListRef, setCollapse]);

  useEffect(() => {
    checkShouldCollapse();
  }, [children, checkShouldCollapse]);

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
