import { Routes, Route } from 'react-router-dom';
import { Menu } from './menu';
import Intro from './intro/Intro';

const Main = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Intro />} />
      </Routes>
    </>
  );
};

export default Main;
