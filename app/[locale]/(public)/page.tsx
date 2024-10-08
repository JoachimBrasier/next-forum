import Categories from '@/components/common/categories';

import Sections from './_components/sections';

const VIEW_MODE: 'SECTIONS' | 'TOPICS' | 'CATEGORIES' = 'SECTIONS';

export default async function Home() {
  return (
    <div className="maxScreenSize py-4">
      {VIEW_MODE === 'TOPICS' && null}
      {VIEW_MODE === 'CATEGORIES' && <Categories />}
      {VIEW_MODE === 'SECTIONS' && <Sections />}
    </div>
  );
}
