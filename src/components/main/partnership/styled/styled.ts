import { Divider, styled } from '@mui/material';
import { palette, screen } from 'constants/';

export const Wrap = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  minWidth: screen.minWidth,
  height: 'calc(100vh - 25.5rem)',
  '&& img': { minWidth: '58rem' },
});

export const TitleWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  paddingTop: '4.5rem',
  gap: '2rem',
});

export const Title = styled('span')({
  color: palette.magenta,
  fontSize: '1.5rem',
  fontWeight: 600,
});

export const TopDivider = styled(Divider, {
  shouldForwardProp: (prop: string) => prop !== 'dir',
})<{ dir: 'left' | 'right' }>(({ dir }) => ({
  border: '1px solid',
  borderImageSource: `linear-gradient(to ${dir}, ${palette.magenta}, ${palette.white})`,
  borderImageSlice: 1,
  width: '25rem',
}));

export const Logos = styled('img')({
  margin: '4rem 0',
  width: '58rem',
  height: '21.75rem',
});

export const BottomDivider = styled(Divider)({
  border: '1px solid',
  borderImageSource: `linear-gradient(to left, ${palette.white}, ${palette.magenta}, ${palette.white})`,
  borderImageSlice: 1,
  width: '64.125rem',
});

export const WhiteSpace = styled('div')({
  width: '100%',
  minHeight: '3.5rem',
});
