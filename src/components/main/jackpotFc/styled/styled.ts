import { styled } from '@mui/material';
import { palette } from 'constants/';
import { ScreenType } from 'recoil/atom';

export const Content = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  position: 'relative',
  top: 0,
  left: 0,
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  overflow: type === 'mobile' ? 'hidden auto' : 'hidden',
}));

export const TextWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '37.5rem',
  maxHeight: '85%',
  zIndex: 5,
});

export const MobileImage = styled('img')({
  marginBottom: '-2.5rem',
  width: '100%',
  height: '18rem',
});

export const ContentWrap = styled('div')({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '3rem 0',
});

export const Text = styled('p', {
  shouldForwardProp: (prop: string) => !['isKorean', 'type'].includes(prop),
})<{ isKorean: boolean; type: ScreenType }>(({ isKorean, type }) => ({
  margin: `${isKorean ? 1 : 0.275}rem 0`,
  minWidth: type === 'mobile' ? '75vw' : '45rem',
  maxWidth: '75vw',
  color: palette[type === 'mobile' ? 'white' : 'black'],
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
  whiteSpace: type === 'mobile' ? 'normal' : 'pre',
  textAlign: 'center',
  wordBreak: 'keep-all',
}));

export const JackpotFcText = styled('span', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  marginTop: `${type === 'pc' ? 35 : type === 'tablet' ? 20 : 0}vh`,
  width: '37.5rem',
  color: palette.white,
  fontSize: `${type === 'mobile' ? 2.5 : 3}rem`,
  fontWeight: 900,
  textAlign: 'center',
  zIndex: 5,
  userSelect: 'none',
}));
