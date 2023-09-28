import { Button as B, Divider, styled } from '@mui/material';
import { palette, screen } from 'constants/';
import logo from 'assets/image/common/logo-white.png';

export const Wrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'backgroundColor',
})<{ backgroundColor: string }>(({ backgroundColor }) => ({
  position: 'absolute',
  top: 0,
  left: `calc((100vw - ${screen.maxWidth}) / 2)`,
  display: 'flex',
  alignItems: 'center',
  padding: '2rem 3rem',
  width: 'calc(100% - 6rem)',
  maxWidth: screen.maxWidth,
  minWidth: `calc(${screen.minWidth} - 6rem)`,
  height: '3rem',
  backgroundColor,
  zIndex: 5,
}));

export const Logo = styled('div')({
  width: '8rem',
  minWidth: '8rem',
  height: '2rem',
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
  cursor: 'pointer',
});

export const Line = styled(Divider)({
  border: '1px solid',
  borderImageSource: `linear-gradient(to left, ${palette.white}, rgba(255, 255, 255, 25%))`,
  borderImageSlice: 1,
  marginRight: '3.5rem',
  width: '56rem',
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
