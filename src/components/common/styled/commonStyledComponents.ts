import { styled } from '@mui/material';
import { screen, palette } from 'constants/';

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
  left: 0,
  width: '100%',
  minWidth: screen.minWidth,
  height: '100%',
  zIndex: 1,
  overflow: 'hidden',
});

export const DummySpace = styled('div')({
  width: '100%',
  minHeight: '7rem',
  height: '7rem',
});

export const Closing = styled('div', {
  shouldForwardProp: (prop: string) => !['shouldClose', 'isTop'].includes(prop),
})<{ shouldClose: boolean; isTop?: boolean }>(({ shouldClose, isTop }) => ({
  position: 'absolute',
  top: shouldClose ? `${isTop ? 0 : 50}vh` : `${isTop ? -50 : 100}vh`,
  left: 0,
  display: 'block',
  width: '100vw',
  height: '50vh',
  backgroundColor: palette.dark,
  overflow: 'hidden',
  zIndex: 30,
}));
