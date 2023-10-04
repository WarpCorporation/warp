import { styled } from '@mui/material';
import { palette } from 'constants/';

export const Content = styled('div')({
  position: 'relative',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  overflow: 'hidden',
});

export const TextWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '3rem',
  width: '37.5rem',
  maxHeight: '85%',
  zIndex: 5,
});

export const Text = styled('p', {
  shouldForwardProp: (prop: string) => prop !== 'isKorean',
})<{ isKorean: boolean }>(({ isKorean }) => ({
  margin: `${isKorean ? 1 : 0.275}rem 0`,
  color: palette.black,
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
  whiteSpace: 'pre',
  textAlign: 'center',
}));

export const JackpotFcText = styled('span')({
  marginTop: `22rem`,
  width: '37.5rem',
  color: palette.white,
  fontSize: '3rem',
  fontWeight: 900,
  textAlign: 'center',
  zIndex: 5,
  userSelect: 'none',
});
