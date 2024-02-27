import { TagGroup, TagItem } from '@launchpad-ui/core';

const MOCK_TAGS = [
	{ id: 1, name: 'News' },
	{ id: 2, name: 'Travel' },
	{ id: 3, name: 'Gaming' },
	{ id: 4, name: 'Shopping' },
	{ id: 5, name: 'Sports' },
	{ id: 6, name: 'Music' },
	{ id: 7, name: 'Documentaries' },
	{ id: 8, name: 'History' },
];

export default function Index() {
	return <TagGroup items={MOCK_TAGS}>{(item) => <TagItem>{item.name}</TagItem>}</TagGroup>;
}
