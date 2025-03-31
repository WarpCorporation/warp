import { styled } from '@mui/material';
import warpButton from 'assets/image/intro/warp-button.png';
import { palette } from 'constants/';

export const ButtonsGroup = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: '13.3%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  gap: '2.75rem',
  zIndex: 2,
  overflow: 'hidden',
});

export const LanguageButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.188rem',
  height: '4.25rem',
  color: palette.white,
  fontSize: '0.875rem',
  fontWeight: 500,
  backgroundImage: `url(${warpButton})`,
  backgroundSize: 'cover',
  transition: '200ms',
  cursor: 'pointer',
  '& span': { transition: '250ms' },
  '&:hover': { '& span': { transform: 'scale(1.2)' } },
});

export const DialogContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${palette.black}`,
  padding: '1.2rem',
  margin: '0.5rem',
});

export const DialogTitle = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
  fontSize: '32px',
});

export const DialogText = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  wordBreak: 'keep-all',
  fontSize: '18px',
});

export const DialogDate = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
  fontSize: '18px',
  fontWeight: 600,
});

export const DialogCompany = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
  fontSize: '28px',
  fontWeight: 600,
});

export const DialogAddress = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '0.5rem',
  fontSize: '24px',
  fontWeight: 200,
});

export const DialogPresident = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '0.5rem',
  fontSize: '28px',
  fontWeight: 600,
});

export const ButtonWrap = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  '& button': {
    padding: '0.25rem 0',
    color: palette.black,
  },
});
