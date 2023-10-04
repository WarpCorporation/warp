import { styled } from '@mui/material';
import { palette, screen } from 'constants/';
import headerLayer from 'assets/common/header-layer.png';

export const DummySpace = styled('div')({
  width: '100%',
  minWidth: screen.minWidth,
  height: '16.5rem',
  backgroundColor: 'transparent',
});

export const Content = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  minWidth: screen.minWidth,
  height: '16.5rem',
  color: palette.white,
  fontSize: '1.5rem',
  fontWeight: 500,
  backgroundImage: `url(${headerLayer})`,
  backgroundSize: 'cover',
  backgroundColor: palette.magenta,
  '& span': { transform: 'translateY(1.5rem)' },
});
