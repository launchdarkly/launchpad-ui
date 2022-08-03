import type { FilterOption } from '../src/FilterMenu';

import { useState } from 'react';

import { Filter, type FilterProps } from '../src/Filter';

const FilterTestWrapper = (props?: Partial<FilterProps>) => {
  const [description, setDescription] = useState({ name: 'osmo', value: 'osmo' } as FilterOption);
  const onSelect = (item: FilterOption) => {
    setDescription(item);
  };

  return (
    <Filter
      name="author"
      description={description.name}
      options={[]}
      onSelect={onSelect}
      {...props}
    />
  );
};

export { FilterTestWrapper };
