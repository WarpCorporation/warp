import { styled } from '@mui/material';
import warpButton from 'assets/image/intro/warp-button.png';
import { palette } from 'constants/';

export const ButtonsGroup = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: '13.3%',
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
  '& span': { transition: '250ms' },
  '&:hover': { '& span': { transform: 'scale(1.2)' } },
});
