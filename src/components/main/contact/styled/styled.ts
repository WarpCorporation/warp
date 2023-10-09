import { Divider as D, styled } from '@mui/material';
import { palette, screen } from 'constants/';

export const Wrap = styled('div')({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem 0',
  width: '100vw',
  minWidth: screen.minWidth,
  '&& img': { minWidth: '9rem' },
});

export const Logo = styled('img')({
  marginBottom: '6rem',
  width: '9rem',
  height: '2.5rem',
});

export const ContactInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const InfoWrap = styled('span')({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1.5rem',
});

export const Key = styled('div')({
  margin: '0.75rem 4rem 0.75rem 0',
  fontWeight: 800,
  textAlign: 'end',
});

export const Prop = styled('div')({
  margin: '0.75rem 0 0.75rem 4.25rem',
  fontWeight: 500,
  textAlign: 'start',
});

export const Divider = styled(D)({
  height: '15.5rem',
  borderColor: palette.magenta,
});

export const MobileWrap = styled('div')({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  width: '90vw',
  gap: '2rem',
});

export const MobileRow = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const MobileKey = styled('span')({
  fontWeight: 800,
});

export const MobileProp = styled('span')({
  fontWeight: 500,
});
