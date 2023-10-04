import { styled } from '@mui/material';
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
  shouldForwardProp: (prop: string) => !['top', 'width', 'height', 'isEn'].includes(prop),
})<ImagePropsType>(({ top, width, height, isEn }) => ({
  display: 'flex',
  width,
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
}));

export const ForeText = styled('div')({
  fontWeight: 300,
  transform: '',
});

export const RearText = styled('div')({});

type ImagePropsType = {
  top: string | number;
  width: string | number;
  height: string | number;
  isEn?: boolean;
};
