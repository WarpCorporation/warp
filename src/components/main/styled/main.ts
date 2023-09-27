import { styled } from '@mui/material';
import { palette } from 'constants/';

export const Wrap = styled('div')({
  width: '100%',
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
    !['top', 'bottom', 'left', 'right', 'width', 'height', 'imageUrl', 'zIndex'].includes(prop),
})<ImagePropsType>(({ top, bottom, left, right, width, height, imageUrl, zIndex }) => ({
  position: 'absolute',
  top,
  bottom,
  left,
  right,
  width,
  height,
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  zIndex,
}));

type ImagePropsType = {
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  width: string | number;
  height: string | number;
  imageUrl: string;
  zIndex?: number;
};
