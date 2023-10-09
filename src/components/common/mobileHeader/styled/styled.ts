import { Divider, styled } from '@mui/material';
import { palette } from 'constants/';

export const Wrap = styled('div', {
  shouldForwardProp: (prop: string) => prop !== 'marginOffset',
})<{ marginOffset: number }>(({ marginOffset }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: `${marginOffset / 16}rem`,
}));

export const Header = styled('span')({
  color: palette.magenta,
  fontSize: '1.25rem',
  fontWeight: 600,
});

export const HeaderDivider = styled(Divider)({
  border: `1px solid ${palette.magenta}`,
  margin: '1rem',
  height: '2rem',
});
