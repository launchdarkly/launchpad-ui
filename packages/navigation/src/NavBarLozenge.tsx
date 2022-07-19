import { Lozenge, LozengeKind } from '@launchpad-ui/lozenge';
import cx from 'clsx';

import { titlecase } from './utils';

const NavBarLozenge = ({ kind }: { kind: LozengeKind }) => (
  <Lozenge className={cx('Lozenge--navbar', `Lozenge--${kind}`)}>{titlecase(kind)}</Lozenge>
);

export { NavBarLozenge };
