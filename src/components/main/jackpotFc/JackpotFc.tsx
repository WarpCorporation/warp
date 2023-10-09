import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { useImageQuery } from 'lib';
import { CSC } from 'components/common/styled';
import { S } from './styled';
import jackpotFcBg from 'assets/background/jackpotFc/jackpot-fc-bg.png';
import jackpotFcMobileBg from 'assets/background/jackpotFc/jackpot-fc-mobile-bg.png';

const JackpotFc = () => {
  const { i18n, t } = useTranslation();
  const isKorean = i18n.language === 'kr';
  const [jackpotFcImage, jackpotFcMobileImage] = useImageQuery([
    'jackpot-fc',
    [jackpotFcBg, jackpotFcMobileBg],
  ]);
  const { type } = useRecoilValue(atom.screen);
  const textProps = useMemo(() => ({ isKorean, type }), [isKorean, type]);
  const imageProps = useMemo(
    () => ({
      src: type !== 'mobile' ? jackpotFcImage : jackpotFcMobileImage,
      alt: 'jackpot-fc-bg',
    }),
    [type, jackpotFcImage, jackpotFcMobileImage]
  );

  return (
    <CSC.PageWrap>
      {type !== 'mobile' && <CSC.Background {...imageProps} />}
      <S.Content type={type}>
        <CSC.DummySpace />
        {type === 'mobile' && <S.MobileImage {...imageProps} />}
        {type === 'mobile' && <S.JackpotFcText type={type}>JACKPOT FC</S.JackpotFcText>}
        <S.ContentWrap>
          <S.TextWrap>
            <S.Text {...textProps}>{t('jackpot-fc-01')}</S.Text>
            <S.Text {...textProps}>{t('jackpot-fc-02')}</S.Text>
            <S.Text {...textProps}>{t('jackpot-fc-03')}</S.Text>
            {t('jackpot-fc-04') && <S.Text {...textProps}>{t('jackpot-fc-04')}</S.Text>}
            {t('jackpot-fc-05') && <S.Text {...textProps}>{t('jackpot-fc-05')}</S.Text>}
            {t('jackpot-fc-06') && <S.Text {...textProps}>{t('jackpot-fc-06')}</S.Text>}
            {t('jackpot-fc-07') && <S.Text {...textProps}>{t('jackpot-fc-07')}</S.Text>}
            {t('jackpot-fc-08') && <S.Text {...textProps}>{t('jackpot-fc-08')}</S.Text>}
            {t('jackpot-fc-09') && <S.Text {...textProps}>{t('jackpot-fc-09')}</S.Text>}
          </S.TextWrap>
          {type !== 'mobile' && <S.JackpotFcText type={type}>JACKPOT FC</S.JackpotFcText>}
        </S.ContentWrap>
      </S.Content>
    </CSC.PageWrap>
  );
};

export default JackpotFc;
