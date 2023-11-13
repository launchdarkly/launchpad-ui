import type { Key } from '@react-types/shared';

type SingleSelection = {
  /** The currently selected keys in the collection (controlled). */
  selectedKey?: Key;
  /** The initial selected keys in the collection (uncontrolled). */
  defaultSelectedKey?: Key;
  /** Handler that is called when the selection changes. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelectionChange?: (key: Key) => any;
};

export type { SingleSelection };
