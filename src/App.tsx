import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { GlobalStyles, styled } from '@mui/material';
import { Wrap } from 'components/common';
import { Intro } from 'components/intro';
import { Main } from 'components/main';
import { palette, screen } from 'constants/';
import logo from 'assets/image/common/logo-white.png';
import './language/i18n';

function App() {
  const queryClient = new QueryClient();

  const preloadLogo = () => {
    const img = new Image();
    img.src = logo;
  };

  useEffect(() => {
    preloadLogo();
  }, []);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Wrap>
          <Content>
            <GlobalStyles styles={scrollbarDesign} />
            <Routes>
              <Route path='/' element={<Intro />} />
              <Route path='/main/*' element={<Main />} />
            </Routes>
          </Content>
        </Wrap>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

const Content = styled('div')({
  width: '100%',
  minWidth: screen.minWidth,
  maxWidth: screen.maxWidth,
  height: '100%',
  '& img': { minWidth: screen.minWidth, maxWidth: screen.maxWidth },
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
