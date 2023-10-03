import { styled } from '@mui/material';
import { palette } from 'constants/';

export const TextWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  color: palette.white,
  fontSize: '2rem',
});

export const Image = styled('div', {
  shouldForwardProp: (prop: string) =>
    !['top', 'width', 'height', 'imageUrl', 'zIndex'].includes(prop),
})<ImagePropsType>(({ top, width, height, imageUrl, zIndex }) => ({
  width,
  height,
  backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
  backgroundSize: 'cover',
  zIndex,
  transform: `translateY(${top})`,
}));

type ImagePropsType = {
  top?: string | number;
  width: string | number;
  height: string | number;
  imageUrl?: string;
  zIndex?: number;
};
