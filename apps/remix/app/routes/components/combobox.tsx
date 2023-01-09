import { Combobox, CollectionItem } from '@launchpad-ui/core';

export default function Index() {
  return (
    <Combobox label="Favorite Animal">
      <CollectionItem key="red panda">Red Panda</CollectionItem>
      <CollectionItem key="cat">Cat</CollectionItem>
      <CollectionItem key="dog">Dog</CollectionItem>
      <CollectionItem key="aardvark">Aardvark</CollectionItem>
      <CollectionItem key="kangaroo">Kangaroo</CollectionItem>
      <CollectionItem key="snake">Snake</CollectionItem>
    </Combobox>
  );
}
