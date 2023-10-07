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
  shouldForwardProp: (prop: string) => !['top', 'height', 'isEn'].includes(prop),
})<ImagePropsType>(({ top, height, isEn }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height,
  fontSize: `${isEn ? 2 : 2.25}rem`,
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

export const TextKoWithImage = styled('span')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  '& img': {
    width: '9rem',
    minWidth: '9rem',
    height: '2.5rem',
    transform: 'translateY(0.35rem)',
  },
});

type ImagePropsType = {
  top: string | number;
  height: string | number;
  isEn?: boolean;
};
