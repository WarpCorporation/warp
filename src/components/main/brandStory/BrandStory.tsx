import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useResizeObserver from 'use-resize-observer';
import { useImageQuery } from 'lib';
import { CSC } from 'components/common/styled';
import { S } from './styled';
import brandStoryBg from 'assets/background/brandStory/brand-story-bg.png';

const BrandStory = () => {
  const [textCenter, setTextCenter] = useState<boolean>(false);
  const { t } = useTranslation();
  const [brandStoryImage] = useImageQuery(['brand-story', [brandStoryBg]]);
  const { ref, width } = useResizeObserver();

  useEffect(() => {
    if (!width) return;
    setTextCenter(width < 1500);
  }, [width]);

  return (
    <CSC.PageWrap ref={ref}>
      <CSC.Background src={brandStoryImage} alt='brand-story-bg' />
      <S.ContentWrap>
        <CSC.DummySpace />
        <S.TextWrap textCenter={textCenter}>
          <S.Title>Brand Story</S.Title>
          <S.Divider orientation='vertical' />
          <S.Content>{t('brand-story-01')}</S.Content>
          <S.Content>{t('brand-story-02')}</S.Content>
          <S.Content>{t('brand-story-03')}</S.Content>
          <S.Content>{t('brand-story-04')}</S.Content>
          <S.Content>{t('brand-story-05')}</S.Content>
          <S.Content>{t('brand-story-06')}</S.Content>
          {t('brand-story-07') && <S.Content>{t('brand-story-07')}</S.Content>}
          {t('brand-story-08') && <S.Content>{t('brand-story-08')}</S.Content>}
          {t('brand-story-09') && <S.Content>{t('brand-story-09')}</S.Content>}
          <S.Logo />
        </S.TextWrap>
      </S.ContentWrap>
    </CSC.PageWrap>
  );
};

export default BrandStory;
