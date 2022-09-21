import type { ChipProps } from '@launchpad-ui/chip';

import { Chip } from '@launchpad-ui/chip';
import { cx } from 'classix';

import { titlecase } from './utils';

const NavBarChip = ({ kind }: { kind: ChipProps['kind'] }) => (
  <Chip className={cx('Chip--navbar', `Chip--${kind}`)}>{kind && titlecase(kind)}</Chip>
);

export { NavBarChip };
