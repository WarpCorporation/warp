import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import useResizeObserver from 'use-resize-observer';
import { useImageQuery } from 'lib';
import { CSC } from 'components/common/styled';
import { S } from './styled';
import logoBlack from 'assets/image/common/logo-black.png';
import logoWhite from 'assets/image/common/logo-white.png';
import brandStoryBg from 'assets/background/brandStory/brand-story-bg.png';
import brandStoryMobileBg from 'assets/background/brandStory/brand-story-mobile-bg.png';

const BrandStory = () => {
  const [pcTextCenter, setPcTextCenter] = useState<boolean>(false);
  const { t } = useTranslation();
  const [brandStoryImage, brandStoryMobileImage, blackLogo, whiteLogo] = useImageQuery([
    'brand-story',
    [brandStoryBg, brandStoryMobileBg, logoBlack, logoWhite],
  ]);
  const { ref, width } = useResizeObserver();
  const { type } = useRecoilValue(atom.screen);
  const imageProps = useMemo(
    () => ({
      src: type === 'pc' ? brandStoryImage : brandStoryMobileImage,
      alt: 'brand-story-bg',
    }),
    [type, brandStoryImage, brandStoryMobileImage]
  );

  useEffect(() => {
    if (!width) return;
    setPcTextCenter(type === 'pc' && width < 1500);
  }, [width, type]);

  return (
    <CSC.PageWrap ref={ref}>
      {type === 'pc' && <CSC.Background {...imageProps} />}
      <S.ContentWrap>
        <CSC.DummySpace />
        <S.TextWrap pcTextCenter={pcTextCenter} mobileTextCenter={type !== 'pc'}>
          {type !== 'pc' && <S.MobileImage {...imageProps} />}
          <S.Title>Brand Story</S.Title>
          <S.Divider orientation='vertical' />
          <S.Content type={type}>{t('brand-story-01')}</S.Content>
          <S.Content type={type}>{t('brand-story-02')}</S.Content>
          <S.Content type={type}>{t('brand-story-03')}</S.Content>
          <S.Content type={type}>{t('brand-story-04')}</S.Content>
          <S.Content type={type}>{t('brand-story-05')}</S.Content>
          <S.Content type={type}>{t('brand-story-06')}</S.Content>
          {t('brand-story-07') && <S.Content type={type}>{t('brand-story-07')}</S.Content>}
          {t('brand-story-08') && <S.Content type={type}>{t('brand-story-08')}</S.Content>}
          {t('brand-story-09') && <S.Content type={type}>{t('brand-story-09')}</S.Content>}
          <S.Logo type={type} src={type !== 'pc' ? whiteLogo : blackLogo} alt='warp' />
        </S.TextWrap>
      </S.ContentWrap>
    </CSC.PageWrap>
  );
};

export default BrandStory;
