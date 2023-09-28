import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu } from './menu';
import { Intro } from './intro';
import { BrandStory } from './brandStory';

const Main = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const languageSet = sessionStorage.getItem('@warp_language') ?? 'kr';
    if (i18n.language) return;
    i18n.changeLanguage(languageSet);
    sessionStorage.setItem('@warp_language', languageSet);
  }, [i18n]);

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
