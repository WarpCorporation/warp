import { Divider as D, styled } from '@mui/material';
import { palette, screen } from 'constants/';
import moreButton from 'assets/image/intro/warp-button.png';
import { ScreenType } from 'recoil/atom';

export const Wrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  padding: `${type === 'mobile' ? 2.5 : 4.5}rem 0`,
  width: '100vw',
  minWidth: screen.minWidth,
  overflow: 'hidden auto',
}));

export const CardWrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: type === 'mobile' ? '90vw' : '64rem',
  minWidth: type === 'mobile' ? '90vw' : '64rem',
}));

export const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '4rem',
  width: '100%',
});

export const CardRow = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  display: 'flex',
  flexDirection: type === 'mobile' ? 'column' : 'row',
  alignItems: type === 'mobile' ? 'center' : 'flex-end',
  justifyContent: 'space-between',
  width: '100%',
  textAlign: type === 'mobile' ? 'center' : 'unset',
  gap: `${type === 'mobile' ? 0.5 : 0}rem`,
}));

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

export const Description = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  width: '100%',
  fontSize: '1rem',
  fontWeight: 500,
  textAlign: type === 'mobile' ? 'center' : 'unset',
}));

export const ButtonWrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: type === 'mobile' ? 'center' : 'flex-end',
  marginTop: '1rem',
  color: palette.magenta,
  gap: '0.5rem',
  cursor: 'pointer',
}));

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
