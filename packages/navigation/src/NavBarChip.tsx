import type { ChipKind } from '@launchpad-ui/chip';

import { Chip } from '@launchpad-ui/chip';
import cx from 'clsx';

import { titlecase } from './utils';

const NavBarChip = ({ kind }: { kind: ChipKind }) => (
  <Chip className={cx('Chip--navbar', `Chip--${kind}`)}>{titlecase(kind)}</Chip>
);

export { NavBarChip };
