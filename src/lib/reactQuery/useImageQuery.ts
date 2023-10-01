import { useQuery } from '@tanstack/react-query';
import { getLoadedImage } from 'util/';

export const useImageQuery = (imageSources: [string, string[]]) => {
  const { data } = useQuery({
    queryFn: () => getLoadedImage(imageSources),
    queryKey: ['image-src', imageSources],
    suspense: true,
  });
  return data ?? [];
};
