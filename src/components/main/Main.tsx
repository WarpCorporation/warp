import { Routes, Route } from 'react-router-dom';
import { Menu } from './menu';
import { Intro } from './intro';
import { BrandStory } from './brandStory';

const Main = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/brand-story' element={<BrandStory />} />
      </Routes>
    </>
  );
};

export default Main;
