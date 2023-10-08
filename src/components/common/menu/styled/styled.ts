import { Button as B, Divider, styled } from '@mui/material';
import ScrollContainer from 'react-indiana-drag-scroll';
import { palette, screen } from 'constants/';

export const Wrap = styled('div', {
  shouldForwardProp: (prop: string) => !['backgroundColor', 'isMobile'].includes(prop),
})<{ backgroundColor: string; isMobile: boolean }>(({ backgroundColor, isMobile }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  alignItems: 'center',
  padding: isMobile ? '3.25rem 0' : '2rem 3rem',
  width: `calc(100% - ${isMobile ? 0 : 6}rem)`,
  minWidth: screen.minWidth,
  height: '3rem',
  backgroundColor,
  zIndex: 5,
}));

export const Logo = styled('img')({
  width: '8rem',
  height: '1.875rem',
  cursor: 'pointer',
});

export const Line = styled(Divider, {
  shouldForwardProp: (prop: string) => prop !== 'isMobile',
})<{ isMobile?: boolean }>(({ isMobile }) => ({
  flexGrow: 1,
  border: '1px solid',
  borderImageSource: `linear-gradient(to ${isMobile ? 'right' : 'left'}, ${
    palette.white
  }, rgba(255, 255, 255, 25%))`,
  borderImageSlice: 1,
  marginRight: isMobile ? 0 : '3.5rem',
  width: isMobile ? '100%' : 'auto',
  height: 0,
  color: palette.white,
  opacity: 0.5,
}));

export const ButtonsGroup = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'horizontal',
})({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: '55.75rem',
  maxWidth: '55.75rem',
});

export const Button = styled(B, {
  shouldForwardProp: (prop: string) => prop !== 'hoverColor',
})<{ hoverColor: string }>(({ hoverColor }) => ({
  minWidth: 'fit-content',
  color: palette.white,
  fontWeight: 700,
  '&:hover': { color: hoverColor, backgroundColor: 'transparent' },
}));

export const Scroll = styled(ScrollContainer)({
  display: 'flex',
  padding: '1rem 2rem 0.75rem',
  minWidth: '22rem',
  width: '22rem',
  minHeight: '2rem',
  height: '2rem',
  gap: '1.5rem',
  cursor: 'pointer',
  '& button': { fontSize: '0.75rem' },
});
