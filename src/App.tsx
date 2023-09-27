import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled } from '@mui/material';
import { Intro } from 'components/intro';
import { Main } from 'components/main';
import { palette, screen } from 'constants/';
import './language/i18n';

function App() {
  return (
    <Wrap>
      <Content>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/main/*' element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </Wrap>
  );
}

export default App;

const Wrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: palette.black,
});

const Content = styled('div')({
  width: '100%',
  minWidth: screen.minWidth,
  maxWidth: screen.maxWidth,
  height: '100%',
  '& img': { minWidth: screen.minWidth, maxWidth: screen.maxWidth },
});
