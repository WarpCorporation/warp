import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled } from '@mui/material';
import { Wrap } from 'components/common';
import { Intro } from 'components/intro';
import { Main } from 'components/main';
import { screen } from 'constants/';
import './language/i18n';

function App() {
  return (
    <BrowserRouter>
      <Wrap>
        <Content>
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/main/*' element={<Main />} />
          </Routes>
        </Content>
      </Wrap>
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
