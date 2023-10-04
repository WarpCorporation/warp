import { Divider as D, styled } from '@mui/material';
import { palette, screen } from 'constants/';

export const Wrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '4.5rem 0',
  width: '100vw',
  minWidth: screen.minWidth,
  height: 'calc(100vh - 25.5rem)',
  overflow: 'hidden auto',
});

export const CardWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '64rem',
  gap: '4rem',
});

export const Card = styled('div')({
  display: 'flex',
  gap: '2rem',
  '&& img': { minWidth: '13rem', maxWidth: '13rem' },
});

export const Picture = styled('img')({
  width: '13rem',
  height: '13.5rem',
});

export const Information = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: 'fit-content',
  minWidth: '46.5rem',
  whiteSpace: 'pre',
});

export const Names = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.25rem',
  fontWeight: 500,
  gap: '0.875rem',
  '& span': { letterSpacing: '0.5rem' },
});

export const Position = styled('div')({
  margin: '0.5rem 0 0',
  color: palette.magenta,
  fontSize: '1rem',
  fontWeight: 500,
});

export const Divider = styled(D)({
  border: '1px solid',
  borderImageSource: `linear-gradient(to left, ${palette['light-magenta']}, ${palette.magenta})`,
  borderImageSlice: 1,
  margin: '1rem 0',
});

export const Description = styled('div')({
  fontSize: '0.75rem',
  fontWeight: 500,
});

export const WhiteSpace = styled('div')({
  width: '100%',
  minHeight: 0.1,
  backgroundColor: palette.white,
});
