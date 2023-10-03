import { Button as B, Divider, styled } from '@mui/material';
import { palette, screen } from 'constants/';

export const Wrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'backgroundColor',
})<{ backgroundColor: string }>(({ backgroundColor }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  padding: '2rem 3rem',
  width: 'calc(100% - 6rem)',
  minWidth: screen.minWidth,
  height: '3rem',
  backgroundColor,
  zIndex: 5,
  '&& img': { minWidth: '8rem', maxWidth: '8rem' },
}));

export const Logo = styled('img')({
  width: '8rem',
  height: '1.875rem',
  cursor: 'pointer',
});

export const Line = styled(Divider)({
  flexGrow: 1,
  border: '1px solid',
  borderImageSource: `linear-gradient(to left, ${palette.white}, rgba(255, 255, 255, 25%))`,
  borderImageSlice: 1,
  marginRight: '3.5rem',
  height: 0,
  color: palette.white,
  opacity: 0.5,
});

export const ButtonsGroup = styled('div')({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: '46.5rem',
  maxWidth: '46.5rem',
});

export const Button = styled(B, {
  shouldForwardProp: (prop: string) => prop !== 'hoverColor',
})<{ hoverColor: string }>(({ hoverColor }) => ({
  color: palette.white,
  fontWeight: 700,
  '&:hover': { color: hoverColor, backgroundColor: 'transparent' },
}));
