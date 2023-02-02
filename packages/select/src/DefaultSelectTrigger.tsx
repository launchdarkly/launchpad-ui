import type { SelectTriggerProps } from './Select';

import { MultiSelectTrigger } from './MultiSelectTrigger';
import { SingleSelectTrigger } from './SingleSelectTrigger';

const DefaultSelectTrigger = <T extends object>(props: SelectTriggerProps<T>) => {
  const { state } = props;

  if (state.selectionMode === 'multiple') {
    return <MultiSelectTrigger {...props} />;
  }

  return <SingleSelectTrigger {...props} />;
};

export { DefaultSelectTrigger };
