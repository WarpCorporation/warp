import { useQuery } from '@tanstack/react-query';
import { getLoadedImage } from 'util/';

export const useImageQuery = (imageSrc: string) => {
  const { data } = useQuery({
    queryFn: () => getLoadedImage(imageSrc),
    queryKey: ['image-src', imageSrc],
    suspense: true,
  });
  return data;
};
