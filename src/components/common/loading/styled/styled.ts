import { Divider as D, styled } from '@mui/material';
import { palette } from 'constants/';

export const Wrap = styled('div', {
  shouldForwardProp: (prop: string) => !['animationDone', 'backgroundColor'].includes(prop),
})<{ animationDone: boolean; backgroundColor: string }>(({ animationDone, backgroundColor }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: animationDone ? 'none' : 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '101vw',
  height: '100vh',
  backgroundColor,
}));

export const LogoWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '25%',
  width: '10rem',
  height: '3rem',
  backgroundColor: 'transparent',
  zIndex: 30,
  opacity: 0,
  '&& img': { minWidth: '8.5rem', maxWidth: '8.5rem' },
});

export const Logo = styled('img')({
  width: '8.5rem',
  height: '2rem',
});

export const TopWrap = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '50vh',
  backgroundColor: palette.dark,
  overflow: 'hidden',
  zIndex: 20,
  transform: 'translateY(-50vh)',
  opacity: 0,
});

export const Divider = styled(D)({
  position: 'absolute',
  top: '50vh',
  left: 0,
  width: '100vw',
  border: `1px solid ${palette.white}`,
  zIndex: 25,
  transform: 'translateY(-50vh)',
  opacity: 0,
});

export const BottomWrap = styled('div')({
  position: 'absolute',
  top: '50vh',
  left: 0,
  width: '100vw',
  height: '50vh',
  backgroundColor: palette.dark,
  overflow: 'hidden',
  zIndex: 20,
  transform: 'translateY(50vh)',
  opacity: 0,
});
