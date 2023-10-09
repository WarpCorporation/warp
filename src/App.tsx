import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { atom } from 'recoil/atom';
import useResizeObserver from 'use-resize-observer';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { GlobalStyles, styled } from '@mui/material';
import { Closing, Wrap } from 'components/common';
import { Intro } from 'components/intro';
import { Main } from 'components/main';
import { palette, screen } from 'constants/';
import logo from 'assets/image/common/logo-white.png';
import './language/i18n';

function App() {
  const [shouldClose, setShouldClose] = useState<boolean>(false);
  const queryClient = new QueryClient();
  const useSetScreenType = useSetRecoilState(atom.screen);
  const { ref, width = 1920 } = useResizeObserver();
  useSetScreenType({ width, type: width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'pc' });

  const preloadLogo = () => {
    const img = new Image();
    img.src = logo;
  };

  const handlePageChange = (newStatus: boolean) => {
    setShouldClose(newStatus);
  };

  useEffect(() => {
    preloadLogo();
  }, []);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Wrap>
          <Content ref={ref}>
            <GlobalStyles styles={scrollbarDesign} />
            <Closing shouldClose={shouldClose}>
              <Routes>
                <Route path='/' element={<Intro handlePageChange={handlePageChange} />} />
                <Route path='/main/*' element={<Main handlePageChange={handlePageChange} />} />
              </Routes>
            </Closing>
          </Content>
        </Wrap>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: screen.minWidth,
  maxWidth: screen.maxWidth,
  height: '100%',
});

const scrollbarDesign = {
  '&::-webkit-scrollbar': {
    width: '0.5rem',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: palette.dark,
    borderRadius: '0.5rem',
    backgroundClip: 'padding-box',
    border: '0.125rem solid transparent',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: 'grey',
    boxShadow: `inset 0px 0px 0.5rem ${palette.white}`,
  },
};
