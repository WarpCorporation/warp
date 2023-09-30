import { styled } from '@mui/material';
import { palette } from 'constants/';

export const Wrap = styled('div')({
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: palette.white,
  backgroundColor: palette.dark,
  overflow: 'hidden',
});
