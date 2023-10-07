import { Divider as D, styled } from '@mui/material';
import { screen, palette } from 'constants/';
import logo from 'assets/image/common/logo-black.png';

export const ContentWrap = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
});

export const TextWrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'textCenter',
})<{ textCenter: boolean }>(({ textCenter }) => ({
  position: 'relative',
  left: 0,
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem 0',
  minWidth: screen.minWidth,
  zIndex: 2,
  '& span, hr, div, p': { marginRight: `${textCenter ? 32.5 : 50}rem` },
  '& p': { fontSize: `${textCenter ? 0.875 : 1}rem` },
}));

export const Title = styled('span')({
  minWidth: '7.55rem',
  color: palette.magenta,
  fontSize: '1.25rem',
  fontWeight: 600,
});

export const Divider = styled(D)({
  border: `1px solid ${palette.magenta}`,
  margin: '1rem 0 0.5rem',
  height: '2.25rem',
});

export const Content = styled('p')({
  margin: '0.5rem 0',
  width: 'fit-content',
  minWidth: '45rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
  whiteSpace: 'pre',
  textAlign: 'center',
});

export const Logo = styled('div')({
  marginTop: '1.5rem',
  width: '9.25rem',
  height: '2.5rem',
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
});
