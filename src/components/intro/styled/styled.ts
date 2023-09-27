import { styled } from '@mui/material';
import warpButton from 'assets/image/warp-button.png';
import { palette } from 'constants/';

export const Wrap = styled('div')({
  width: '100%',
  height: '100%',
});

export const Background = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  overflow: 'hidden',
});

export const ButtonsGroup = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: '9rem',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  gap: '2.75rem',
  zIndex: 2,
  overflow: 'hidden',
});

export const LanguageButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.188rem',
  height: '4.25rem',
  color: palette.white,
  fontSize: '0.875rem',
  fontWeight: 500,
  backgroundImage: `url(${warpButton})`,
  backgroundSize: 'cover',
  transition: '200ms',
  cursor: 'pointer',
});
