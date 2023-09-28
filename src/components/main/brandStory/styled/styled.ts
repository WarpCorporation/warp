import { Divider as D, styled } from '@mui/material';
import { palette } from 'constants/';
import logo from 'assets/image/common/logo-black.png';

export const TextWrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'isKorean',
})<{ isKorean: boolean }>(({ isKorean }) => ({
  position: 'relative',
  top: `${isKorean ? -80 : -85}%`,
  left: '16rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '37.5rem',
  maxHeight: '85%',
}));

export const Title = styled('span')({
  color: palette.magenta,
  fontSize: '1.25rem',
});

export const Divider = styled(D)({
  border: `1px solid ${palette.magenta}`,
  margin: '1.375rem 0 calc(1.375rem - 1.5%)',
  height: '2.25rem',
});

export const Content = styled('p')({
  margin: '1.5% 0',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
  whiteSpace: 'pre',
  textAlign: 'center',
});

export const Logo = styled('div')({
  marginTop: '5%',
  width: '9.25rem',
  height: '2.5rem',
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
});
