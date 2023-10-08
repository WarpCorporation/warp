import { Slide as S, styled } from '@mui/material';
import { palette } from 'constants/';

export const TextWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  color: palette.white,
  fontSize: '2rem',
});

export const Text = styled('div', {
  shouldForwardProp: (prop: string) => !['top', 'height', 'fontSize', 'isEn'].includes(prop),
})<ImagePropsType>(({ top, height, fontSize, isEn }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height,
  fontSize,
  fontWeight: isEn ? 300 : 100,
  letterSpacing: '0.05rem',
  transform: `translateY(${top})`,
  whiteSpace: 'break-spaces',
  zIndex: 5,
  '& span:first-of-type': {
    transform: 'translateY(1rem)',
  },
  '& p': { display: 'flex', margin: 0 },
}));

export const Slide = styled(S)({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& span': { width: 'fit-content' },
});

export const TextKoWithImage = styled('span', {
  shouldForwardProp: (prop: string) => prop !== 'isMobile',
})<{ isMobile: boolean }>(({ isMobile }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  '& img': {
    width: `${isMobile ? 6.5 : 9}rem`,
    minWidth: `${isMobile ? 6.5 : 9}rem`,
    height: `${isMobile ? 1.75 : 2.5}rem`,
    transform: 'translateY(0.35rem)',
  },
}));

type ImagePropsType = {
  top: string | number;
  height: string | number;
  fontSize: string | number;
  isEn?: boolean;
};
