import type { SeparatorProps } from 'react-aria';
import type { RefObject } from 'react';

import { useSeparator } from 'react-aria';

import './styles/Menu.css';

type MenuDividerProps = SeparatorProps & {
  innerRef?: RefObject<HTMLDivElement>;
  'data-test-id'?: string;
};

const MenuDivider = ({
  elementType = 'div',
  orientation,
  innerRef,
  'data-test-id': testId = 'menu-divider',
}: MenuDividerProps) => {
  const { separatorProps } = useSeparator({
    orientation,
    elementType,
  });

  return <div {...separatorProps} data-test-id={testId} ref={innerRef} className="Menu-divider" />;
};

export { MenuDivider };
export type { MenuDividerProps };
