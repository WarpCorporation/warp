import { styled } from '@mui/material';

export const Wrap = styled('div', {
  shouldForwardProp: (prop: string) => !['backgroundColor', 'allowOverflow'].includes(prop),
})<{ backgroundColor: string; allowOverflow: boolean }>(({ backgroundColor, allowOverflow }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  width: '100%',
  height: '100%',
  backgroundColor,
  overflow: allowOverflow ? 'hidden auto' : 'hidden',
}));
