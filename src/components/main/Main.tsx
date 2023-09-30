import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu } from './menu';
import { Intro } from './intro';
import { BrandStory } from './brandStory';
import { JackpotFc } from './jackpotFc';
import { Leadership } from './leadership';
import { Partnership } from './partnership';
import { Loading } from 'components/common';

const Main = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const languageSet = sessionStorage.getItem('@warp_language') ?? 'kr';
    if (i18n.language) return;
    i18n.changeLanguage(languageSet);
    sessionStorage.setItem('@warp_language', languageSet);
  }, [i18n]);

  return (
    <Suspense fallback={<Loading />}>
      <Menu />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/brand-story' element={<BrandStory />} />
        <Route path='/jackpot-fc' element={<JackpotFc />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/partnership' element={<Partnership />} />
      </Routes>
    </Suspense>
  );
};

export default Main;
