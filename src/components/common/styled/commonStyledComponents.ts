import { styled } from '@mui/material';
import { screen } from 'constants/';

export const PageWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  minWidth: screen.minWidth,
  height: '100%',
});

export const Background = styled('img')({
  position: 'absolute',
  top: 0,
  left: '50%',
  width: '100%',
  height: '100%',
  zIndex: 1,
  overflow: 'hidden',
  transform: 'translateX(-50%)',
});

export const DummySpace = styled('div')({
  width: '100%',
  minHeight: '7rem',
  height: '7rem',
});
