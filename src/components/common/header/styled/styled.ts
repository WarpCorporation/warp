import { styled } from '@mui/material';
import { palette, screen } from 'constants/';
import headerLayer from 'assets/common/header-layer.png';

export const Wrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minWidth: screen.minWidth,
  maxWidth: screen.maxWidth,
  height: '18.5rem',
  color: palette.white,
  fontSize: '1.5rem',
  fontWeight: 500,
  backgroundImage: `url(${headerLayer})`,
  backgroundSize: 'cover',
  '& span': { transform: 'translateY(1.5rem)' },
});
