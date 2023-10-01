import { Divider as D, styled } from '@mui/material';
import { palette, screen } from 'constants/';
import moreButton from 'assets/image/intro/warp-button.png';

export const Wrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '4.5rem 0',
  width: '100vw',
  minWidth: screen.minWidth,
  height: 'calc(100vh - 27.5rem)',
  overflow: 'hidden auto',
});

export const CardWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '64rem',
  minWidth: '64rem',
});

export const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '4rem',
  width: '100%',
});

export const CardRow = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  width: '100%',
});

export const Title = styled('span')({
  fontSize: '1.25rem',
  fontWeight: 700,
});

export const Date = styled('span')({
  fontSize: '0.75rem',
  fontWeight: 500,
});

export const Divider = styled(D)({
  border: `1px solid ${palette.magenta}`,
  margin: '1rem 0',
});

export const Description = styled('div')({
  width: '100%',
  fontSize: '1rem',
  fontWeight: 500,
});

export const ButtonWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: '1rem',
  color: palette.magenta,
  gap: '0.5rem',
  cursor: 'pointer',
});

export const MoreButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.75rem',
  height: '1.75rem',
  color: palette.white,
  fontSize: '0.875rem',
  fontWeight: 500,
  backgroundImage: `url(${moreButton})`,
  backgroundSize: 'cover',
  transition: '200ms',
});
