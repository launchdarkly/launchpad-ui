import type { ChipKind } from '@launchpad-ui/chip';

enum NavKind {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type NavItemStatus = ChipKind;

export { NavKind };
export type { NavItemStatus };
