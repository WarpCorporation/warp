import { styled } from '@mui/material';
import { palette, screen } from 'constants/';

export const Wrap = styled('div')({
  width: '100%',
  minWidth: screen.minWidth,
  maxWidth: screen.maxWidth,
  height: '100%',
  backgroundColor: palette.black,
});

export const TextWrap = styled('div')({
  width: 'auto',
  height: 'auto',
  color: palette.white,
  fontSize: '2rem',
});

export const Text = styled('span')({});

export const Image = styled('div', {
  shouldForwardProp: (prop: string) =>
    !['top', 'left', 'width', 'height', 'imageUrl', 'zIndex'].includes(prop),
})<ImagePropsType>(({ top, left, width, height, imageUrl, zIndex }) => ({
  position: 'relative',
  top,
  left,
  width,
  height,
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  zIndex,
}));

type ImagePropsType = {
  top?: string | number;
  left?: string | number;
  width: string | number;
  height: string | number;
  imageUrl: string;
  zIndex?: number;
};
