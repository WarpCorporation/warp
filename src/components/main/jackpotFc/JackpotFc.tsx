import { useTranslation } from 'react-i18next';
import { CSC } from 'components/common/styled';
import { S } from './styled';
import jackpotFcBg from 'assets/background/jackpotFc/jackpot-fc-bg.png';

const JackpotFc = () => {
  const { i18n, t } = useTranslation();
  const isKorean = i18n.language === 'kr';

  return (
    <CSC.PageWrap>
      <CSC.Background src={jackpotFcBg} alt='jackpot-fc-bg' />
      <S.Content>
        <CSC.DummySpace />
        <S.TextWrap>
          <S.Text isKorean={isKorean}>{t('jackpot-fc-01')}</S.Text>
          <S.Text isKorean={isKorean}>{t('jackpot-fc-02')}</S.Text>
          <S.Text isKorean={isKorean}>{t('jackpot-fc-03')}</S.Text>
          {t('jackpot-fc-04') && <S.Text isKorean={isKorean}>{t('jackpot-fc-04')}</S.Text>}
          {t('jackpot-fc-05') && <S.Text isKorean={isKorean}>{t('jackpot-fc-05')}</S.Text>}
          {t('jackpot-fc-06') && <S.Text isKorean={isKorean}>{t('jackpot-fc-06')}</S.Text>}
          {t('jackpot-fc-07') && <S.Text isKorean={isKorean}>{t('jackpot-fc-07')}</S.Text>}
          {t('jackpot-fc-08') && <S.Text isKorean={isKorean}>{t('jackpot-fc-08')}</S.Text>}
          {t('jackpot-fc-09') && <S.Text isKorean={isKorean}>{t('jackpot-fc-09')}</S.Text>}
        </S.TextWrap>
        <S.JackpotFcText>JACKPOT FC</S.JackpotFcText>
      </S.Content>
    </CSC.PageWrap>
  );
};

export default JackpotFc;
