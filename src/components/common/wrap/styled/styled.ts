import { styled } from '@mui/material';

export const Wrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'backgroundColor',
})<{ backgroundColor: string }>(({ backgroundColor }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor,
}));
