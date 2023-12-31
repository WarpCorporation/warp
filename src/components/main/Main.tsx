import { Suspense, useState, useEffect, RefObject } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Intro } from './intro';
import { BrandStory } from './brandStory';
import { JackpotFc } from './jackpotFc';
import { Leadership } from './leadership';
import { Partnership } from './partnership';
import { PressMedia } from './pressMedia';
import { Contact } from './contact';
import { Menu, Loading } from 'components/common';

type PropsType = {
  wrapRef: RefObject<HTMLDivElement>;
  handlePageChange: (newStatus: boolean) => void;
};

const Main = (props: PropsType) => {
  const { wrapRef, handlePageChange } = props;
  const [currentPathname, setCurrentPathname] = useState<string>('');
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const languageSet = sessionStorage.getItem('@warp_language') ?? 'kr';
    if (i18n.language) return;
    i18n.changeLanguage(languageSet);
    sessionStorage.setItem('@warp_language', languageSet);
  }, [i18n]);

  useEffect(() => {
    setCurrentPathname(pathname);
    wrapRef.current?.scrollTo(0, 0);
  }, [pathname, wrapRef]);

  return (
    <Suspense fallback={<Loading />}>
      <Loading pathname={currentPathname}>
        <>
          <Menu handlePageChange={handlePageChange} />
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/brand-story' element={<BrandStory />} />
            <Route path='/jackpot-fc' element={<JackpotFc />} />
            <Route path='/leadership' element={<Leadership />} />
            <Route path='/partnership' element={<Partnership />} />
            <Route path='/press-media' element={<PressMedia />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </>
      </Loading>
    </Suspense>
  );
};

export default Main;
