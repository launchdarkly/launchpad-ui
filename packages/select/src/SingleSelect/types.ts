import type { Key } from 'react';

type SingleSelection = {
  /** The currently selected keys in the collection (controlled). */
  selectedKey?: Key;
  /** The initial selected keys in the collection (uncontrolled). */
  defaultSelectedKey?: Key;
  /** Handler that is called when the selection changes. */
  onSelectionChange?: (key: Key) => void;
};

export type { SingleSelection };
