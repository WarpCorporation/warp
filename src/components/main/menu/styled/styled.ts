import { Button as B, styled } from '@mui/material';
import { palette, screen } from 'constants/';
import logo from 'assets/image/common/logo.png';
import whiteLine from 'assets/image/common/white-line.png';

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
  minWidth: `calc(${screen.minWidth} - 6rem)`,
  height: '3rem',
  backgroundColor,
  zIndex: 5,
}));

export const Logo = styled('div')({
  width: '8rem',
  height: '2rem',
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
});

export const Line = styled('div')({
  marginRight: '3.5rem',
  width: '56rem',
  height: '0.1rem',
  backgroundImage: `url(${whiteLine})`,
  backgroundSize: 'cover',
});

export const ButtonsGroup = styled('div')({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: '46.5rem',
});

export const Button = styled(B)({
  color: palette.white,
  fontWeight: 700,
  '&:hover': { color: palette.magenta },
});
