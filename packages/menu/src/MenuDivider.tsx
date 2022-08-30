import type { SeparatorProps } from '@react-aria/separator';
import type { RefObject } from 'react';

import { useSeparator } from '@react-aria/separator';

import './styles/Menu.css';

type MenuDividerProps = SeparatorProps & {
  innerRef?: RefObject<HTMLDivElement>;
};

const MenuDivider = ({ elementType = 'div', orientation, innerRef }: MenuDividerProps) => {
  const { separatorProps } = useSeparator({
    orientation,
    elementType,
  });

  return <div {...separatorProps} ref={innerRef} className="Menu-divider" />;
};

export { MenuDivider };
export type { MenuDividerProps };
