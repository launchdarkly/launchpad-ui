type DummyItem = {
	id: string;
	name: string;
	description: string;
};

const FRUIT: DummyItem[] = [
	{
		id: '1',
		name: 'Apple',
		description: 'This is a description',
	},
	{
		id: '2',
		name: 'Banana',
		description: 'This is a description',
	},
	{
		id: '3',
		name: 'Orange',
		description: 'This is a description',
	},
	{
		id: '4',
		name: 'Blueberry',
		description: 'This is a description',
	},
	{
		id: '5',
		name: 'Kiwi',
		description: 'This is a description',
	},
	{
		id: '6',
		name: 'Pear',
		description: 'This is a description',
	},
	{
		id: '7',
		name: 'Strawberry',
		description: 'This is a description',
	},
	{
		id: '8',
		name: 'Raspberry',
		description: 'This is a description',
	},
	{
		id: '9',
		name: 'Grapefruit',
		description: 'This is a description',
	},
];

const VEGETABLES: DummyItem[] = [
	{
		id: '10',
		name: 'Onion',
		description: 'This is a description',
	},
	{
		id: '11',
		name: 'Potato',
		description: 'This is a description',
	},
	{
		id: '12',
		name: 'Iceberg Lettuce',
		description: 'This is a description',
	},
];

const SECTIONED_ITEMS = [
	{
		name: 'Fruit',
		items: FRUIT,
	},
	{
		name: 'Vegetables',
		items: VEGETABLES,
	},
];

export { FRUIT, VEGETABLES, SECTIONED_ITEMS };
export type { DummyItem };
