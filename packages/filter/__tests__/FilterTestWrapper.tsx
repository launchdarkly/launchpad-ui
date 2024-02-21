import type { ChangeEvent } from 'react';
import type { FilterOption } from '../src/FilterMenu';

import { useState } from 'react';

import { Filter, type FilterProps } from '../src/Filter';

const FilterTestWrapper = (props?: Partial<FilterProps>) => {
  const initialDescription = { name: 'osmo', value: 'osmo' } as FilterOption;
  const [description, setDescription] = useState(initialDescription);
  const [options, setOptions] = useState(props?.options ?? []);

  const onSelect = (item: FilterOption) => {
    setDescription(item);
  };

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filteredOptions = options.filter((option) => option?.value.includes(event.target.value));

    setOptions(filteredOptions);
  };

  const onClear = () => {
    setDescription(initialDescription);
  };

  return (
    <Filter
      {...props}
      name="author"
      description={description.name}
      options={options}
      onSelect={onSelect}
      onSearchChange={onSearchChange}
      onClear={onClear}
    />
  );
};

export { FilterTestWrapper };
