import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled } from '@mui/material';
import { Intro } from 'components/intro';

function App() {
  return (
    <Wrap>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </Wrap>
  );
}

export default App;

const Wrap = styled('div')({
  width: '100%',
  height: '100%',
});
