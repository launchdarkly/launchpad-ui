import { Combobox } from '@launchpad-ui/core';
import { Item } from '@react-stately/collections';
import { useListData } from '@react-stately/data';

export default function Index() {
  const list = useListData({
    initialItems: [{ name: 'Aardvark' }, { name: 'Kangaroo' }, { name: 'Snake' }],
    initialSelectedKeys: ['Kangaroo'],
    getKey: (item) => item.name,
  });

  return (
    <Combobox label="Favorite Animal" items={list}>
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </Combobox>
  );
}
