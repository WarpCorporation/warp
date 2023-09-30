import { imageCache } from 'constants/';

const getLoadedImage = (src: string): string | Promise<string> => {
  if (imageCache[src]) {
    return src;
  }
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageCache[src] = img;
      resolve(src);
    };
    img.onerror = (e) => {
      reject(e);
    };
  });
};

export default getLoadedImage;
