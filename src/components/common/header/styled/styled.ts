import { styled } from '@mui/material';
import { palette, screen } from 'constants/';
import headerLayer from 'assets/common/header-layer.png';
import { ScreenType } from 'recoil/atom';

export const DummySpace = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  width: '100%',
  minWidth: screen.minWidth,
  height: `${type !== 'pc' ? 9.5 : 16.5}rem`,
  minHeight: `${type !== 'pc' ? 9.5 : 16.5}rem`,
  backgroundColor: 'transparent',
}));

export const Content = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  minWidth: screen.minWidth,
  height: `${type !== 'pc' ? 9.5 : 16.5}rem`,
  color: palette.white,
  fontSize: '1.5rem',
  fontWeight: 500,
  backgroundImage: `url(${headerLayer})`,
  backgroundSize: 'cover',
  backgroundColor: palette.magenta,
  '& span': { transform: 'translateY(1.5rem)' },
}));
