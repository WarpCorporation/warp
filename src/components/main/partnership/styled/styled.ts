import { Divider, styled } from '@mui/material';
import { palette } from 'constants/';
import { ScreenType } from 'recoil/atom';

export const Wrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: 'calc(100vh - 9.5rem)',
  '&& img': { minWidth: type !== 'pc' ? '75vw' : '58rem' },
}));

export const TitleWrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingTop: type !== 'pc' ? 0 : '4.5rem',
  width: type !== 'pc' ? '90vw' : '58rem',
  gap: `${type !== 'pc' ? 1 : 2}rem`,
}));

export const Title = styled('span', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  color: palette.magenta,
  fontSize: `${type !== 'pc' ? 0.875 : 1.5}rem`,
  fontWeight: 600,
}));

export const TopDivider = styled(Divider, {
  shouldForwardProp: (prop: string) => !['dir', 'type'].includes(prop),
})<{ dir: 'left' | 'right'; type: ScreenType }>(({ dir, type }) => ({
  flexGrow: 1,
  border: '1px solid',
  borderImageSource: `linear-gradient(to ${dir}, ${palette.magenta}, ${palette.white})`,
  borderImageSlice: 1,
}));

export const Logos = styled('img', {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  margin: `${type !== 'pc' ? 2 : 4}rem 0`,
  width: type !== 'pc' ? '75vw' : '58rem',
  height: type !== 'pc' ? '47.5%' : '21.75rem',
}));

export const BottomDivider = styled(Divider, {
  shouldForwardProp: (prop: string) => prop !== 'type',
})<{ type: ScreenType }>(({ type }) => ({
  border: '1px solid',
  borderImageSource: `linear-gradient(to left, ${palette.white}, ${palette.magenta}, ${palette.white})`,
  borderImageSlice: 1,
  width: type !== 'pc' ? '90vw' : '64.125rem',
}));

export const WhiteSpace = styled('div')({
  width: '100%',
  minHeight: '3.5rem',
});
