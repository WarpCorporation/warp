import { Divider as D, styled } from '@mui/material';
import { palette, screen } from 'constants/';
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

export const CardWrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '47.5rem',
  maxWidth: '64rem',
  gap: '4rem',
});

export const Card = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  display: 'flex',
  flexDirection: type === 'mobile' ? 'column' : 'row',
  alignItems: 'center',
  gap: '2rem',
  '&& img': { minWidth: '13rem', maxWidth: '13rem' },
}));

export const Picture = styled('img')({
  width: '13rem',
  height: '13.5rem',
});

export const Information = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: type === 'mobile' ? 'center' : 'flex-start',
  justifyContent: 'flex-end',
  width: 'fit-content',
  whiteSpace: 'pre',
}));

export const Names = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.25rem',
  fontWeight: 500,
  gap: '0.875rem',
  '& span': { letterSpacing: '0.5rem' },
});

export const Position = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  margin: `0.5rem 0 ${type === 'mobile' ? '1rem' : 0}`,
  color: palette.magenta,
  fontSize: '1rem',
  fontWeight: 500,
}));

export const Divider = styled(D)({
  border: '1px solid',
  borderImageSource: `linear-gradient(to left, ${palette['light-magenta']}, ${palette.magenta})`,
  borderImageSlice: 1,
  margin: '1rem 0',
  width: '100%',
});

export const Description = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  minWidth: type === 'mobile' ? '75vw' : '45rem',
  maxWidth: '75vw',
  fontSize: '0.75rem',
  fontWeight: 500,
  textAlign: type === 'mobile' ? 'center' : 'unset',
  whiteSpace: 'normal',
  wordBreak: 'keep-all',
}));

export const WhiteSpace = styled('div')({
  width: '100%',
  minHeight: 0.1,
  backgroundColor: palette.white,
});
