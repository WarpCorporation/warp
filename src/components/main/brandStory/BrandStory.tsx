import { useTranslation } from 'react-i18next';
import { CSC } from 'components/common/styled';
import { S } from './styled';
import brandStoryBg from 'assets/background/brandStory/brand-story-bg.png';

const BrandStory = () => {
  const { i18n, t } = useTranslation();

  return (
    <CSC.PageWrap>
      <CSC.Background src={brandStoryBg} alt='brand-story-bg' />
      <S.TextWrap isKorean={i18n.language === 'kr'}>
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
    </CSC.PageWrap>
  );
};

export default BrandStory;
