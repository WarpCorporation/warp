import { isDesktop } from 'react-device-detect';
import { Divider as D, styled } from '@mui/material';
import { screen, palette } from 'constants/';
import { ScreenType } from 'recoil/atom';

export const ContentWrap = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  overflow: isDesktop ? 'hidden auto' : 'unset',
});

export const MobileImage = styled('img')({
  marginBottom: '3.75rem',
  width: '100%',
  height: '18rem',
});

export const TextWrap = styled('div', {
  shouldForwardProp: (prop: string) => !['pcTextCenter', 'mobileTextCenter'].includes(prop),
})<{ pcTextCenter: boolean; mobileTextCenter: boolean }>(({ pcTextCenter, mobileTextCenter }) => ({
  position: 'relative',
  left: 0,
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 0',
  minWidth: screen.minWidth,
  zIndex: 2,
  '& span, hr, img, p': { marginRight: `${mobileTextCenter ? 0 : pcTextCenter ? 32.5 : 50}rem` },
  '& p': { fontSize: `${pcTextCenter ? 0.875 : 1}rem` },
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

export const Content = styled('p', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  margin: '0.5rem 0',
  width: 'fit-content',
  minWidth: type !== 'pc' ? '75vw' : '45rem',
  maxWidth: '75vw',
  color: palette[type !== 'pc' ? 'white' : 'black'],
  fontWeight: 500,
  lineHeight: '1.25rem',
  whiteSpace: type !== 'pc' ? 'normal' : 'pre',
  textAlign: 'center',
  wordBreak: 'keep-all',
}));

export const Logo = styled('img', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  margin: '1.5rem 0 1rem',
  width: `${type !== 'pc' ? 8 : 9.25}rem`,
  height: `${type !== 'pc' ? 1.875 : 2.5}rem`,
}));
