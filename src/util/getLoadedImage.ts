import { imageCache } from 'constants/';

const getLoadedImage = (sources: [string, string[]]): string[] | Promise<string[]> => {
  const [cacheKey, imageUrls] = sources;
  if (imageCache[cacheKey]) {
    return imageUrls;
  }
  return new Promise((resolve) => {
    const images = [];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        images.push(img);
        if (images.length === imageUrls.length) {
          resolve(imageUrls);
        }
      };
    });
  });
};

export default getLoadedImage;
