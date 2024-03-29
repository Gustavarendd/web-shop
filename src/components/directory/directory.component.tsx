import { Key } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer, PreviewContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'Sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'Womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'Mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/mens',
  },
];
const Directory = () => {
  return (
    <DirectoryContainer>
      <h2>Categories</h2>
      <PreviewContainer>
        {categories.map(category => (
          <DirectoryItem
            category={category}
            key={category.id}
          />
        ))}
      </PreviewContainer>
    </DirectoryContainer>
  );
};

export default Directory;
