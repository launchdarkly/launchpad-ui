import type { Key } from '@react-types/shared';
import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';
import { useMemo, useState } from 'react';

import { FRUIT, SECTIONED_ITEMS } from '../__tests__/constants';
import { CustomSingleSelectTrigger } from '../__tests__/examples';
import { SelectItem, SelectSection, SingleSelect, SingleSelectTrigger } from '../src';

export default {
	component: SingleSelect,
	title: 'Components/Select/Single',
	description:
		'A Select combines a text input with a listbox, allowing users to filter a list of options to items matching a query.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__SELECT,
		},
	},
};

type Story = StoryObj<typeof SingleSelect>;

export const Basic: Story = {
	render: () => {
		const Component = () => {
			return (
				<SingleSelect
					label="Fruit"
					defaultItems={FRUIT}
					onSelectionChange={(key) => console.log(key)}
				>
					{(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
				</SingleSelect>
			);
		};

		return <Component />;
	},
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithUncontrolledSelectedKey: Story = {
	render: () => {
		const Component = () => {
			const [selectedKey, setSelectedKey] = useState<Key>(FRUIT[0].id);
			return (
				<SingleSelect
					label="Fruit"
					selectedKey={selectedKey}
					items={FRUIT}
					onSelectionChange={(key) => setSelectedKey(key)}
				>
					{(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
				</SingleSelect>
			);
		};

		return <Component />;
	},
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithControlledSelectedKey: Story = {
	render: () => {
		const Component = () => {
			return (
				<SingleSelect label="Fruit" defaultSelectedKey={FRUIT[2].id} items={FRUIT}>
					{(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
				</SingleSelect>
			);
		};

		return <Component />;
	},
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithControlledFilterable: Story = {
	render: () => {
		const Component = () => {
			return (
				<SingleSelect
					label="Fruit"
					hasFilter
					defaultItems={FRUIT}
					onSelectionChange={(key) => console.log(key)}
				>
					{(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
				</SingleSelect>
			);
		};

		return <Component />;
	},
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithUncontrolledFilterable: Story = {
	render: () => {
		const Component = () => {
			const [filterValue, setFilterValue] = useState('');

			const filteredFruit = useMemo(
				() => FRUIT.filter((fruit) => fruit.name.toLowerCase().includes(filterValue.toLowerCase())),
				[filterValue],
			);

			return (
				<SingleSelect
					label="Fruit"
					hasFilter
					items={filteredFruit}
					onFilterChange={setFilterValue}
					filterValue={filterValue}
					onSelectionChange={(key) => console.log(key)}
				>
					{(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
				</SingleSelect>
			);
		};

		return <Component />;
	},
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithCustomSelectedRender: Story = {
	render: () => {
		return (
			<SingleSelect
				label="Fruit"
				items={FRUIT}
				onSelectionChange={(key) => console.log(key)}
				trigger={(props) => (
					<SingleSelectTrigger {...props}>
						{({ selectedItem }) => (
							<span style={{ display: 'flex', alignItems: 'center' }}>
								{selectedItem.textValue}{' '}
								<Chip style={{ marginLeft: '5px' }}>ID: {selectedItem.key}</Chip>
							</span>
						)}
					</SingleSelectTrigger>
				)}
			>
				{(item) => (
					<SelectItem textValue={item.name}>
						{item.name} <Chip>ID: {item.id}</Chip>
					</SelectItem>
				)}
			</SingleSelect>
		);
	},
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithCustomTrigger: Story = {
	render: () => {
		return (
			<SingleSelect
				label="Fruit"
				defaultItems={FRUIT}
				onSelectionChange={(key) => console.log(key)}
				trigger={CustomSingleSelectTrigger}
			>
				{(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
			</SingleSelect>
		);
	},
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const SingleSelectWithSections: Story = {
	render: () => {
		return (
			<SingleSelect
				label="Produce"
				defaultItems={SECTIONED_ITEMS}
				hasFilter
				onSelectionChange={(key) => console.log(key)}
			>
				{(section) => (
					<SelectSection key={section.name} title={section.name} items={section.items}>
						{(item) => (
							<SelectItem textValue={item.name}>
								{item.name} <Chip>ID: {item.id}</Chip>
							</SelectItem>
						)}
					</SelectSection>
				)}
			</SingleSelect>
		);
	},
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithSelectItemRenderedAs: Story = {
	render: () => {
		return (
			<SingleSelect
				label="Produce"
				defaultItems={FRUIT}
				hasFilter
				onSelectionChange={(key) => console.log(key)}
			>
				{(item) => (
					<SelectItem as="a" href="#" textValue={item.name}>
						{item.name} <Chip>ID: {item.id}</Chip>
					</SelectItem>
				)}
			</SingleSelect>
		);
	},
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithAllowsCustomValue: Story = {
	render: () => {
		const Component = () => {
			return (
				<SingleSelect
					label="Fruit"
					defaultItems={FRUIT}
					hasFilter
					allowsCustomValue
					onSelectionChange={(key) => console.log(key)}
				>
					{(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
				</SingleSelect>
			);
		};

		return <Component />;
	},
	parameters: {
		docs: { disable: false },
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};
