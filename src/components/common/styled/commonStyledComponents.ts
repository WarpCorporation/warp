import { styled } from '@mui/material';
import { screen, palette } from 'constants/';

export const PageWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  minWidth: screen.minWidth,
  height: '100%',
  overflow: 'hidden',
});

export const Background = styled('img', {
  shouldForwardProp: (prop: string) => !['height', 'transform', 'minWidth'].includes(prop),
})<{ height?: string; transform?: string; minWidth?: string }>(
  ({ height = '100%', transform, minWidth = screen.backgroundMinWidth }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    minWidth,
    height,
    minHeight: '24rem',
    transform,
    zIndex: 1,
    overflow: 'hidden',
  })
);

export const DummySpace = styled('div')({
  width: '100%',
  minHeight: '9.5rem',
  height: '9.5rem',
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
