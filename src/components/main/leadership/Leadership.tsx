import { useTranslation } from 'react-i18next';
import { Header } from 'components/common';
import { S } from './styled';

const Leadership = () => {
  const { i18n, t } = useTranslation();
  const isKorean = i18n.language === 'kr';

  return (
    <>
      <Header title='LEADERSHIP' />
      <S.Wrap>
        <S.CardWrap>
          {leadershipInfo.map(({ nameEn, nameKo, position }, idx) => (
            <S.Card key={nameEn}>
              <S.Picture
                src={require(`assets/image/leadership/profile-pic-${String(idx + 1).padStart(
                  2,
                  '0'
                )}.png`)}
                alt={`picture-${position}`}
              />
              <S.Information>
                <S.Names>
                  {nameEn}
                  {isKorean && <span>{nameKo}</span>}
                </S.Names>
                <S.Position>{position}</S.Position>
                <S.Divider />
                <S.Description>
                  {t(`leadership-description-${String(idx + 1).padStart(2, '0')}`)}
                </S.Description>
              </S.Information>
            </S.Card>
          ))}
          <S.WhiteSpace />
        </S.CardWrap>
      </S.Wrap>
    </>
  );
};

export default Leadership;

const leadershipInfo: LeadershipInfoType[] = [
  {
    nameEn: 'John Hamh',
    nameKo: '함정수',
    position: 'Founder & CEO',
  },
  {
    nameEn: 'Daniel Kim',
    nameKo: '김윤종',
    position: 'CO-Founder & Vice President',
  },
  {
    nameEn: 'Ray Yoon',
    nameKo: '윤철환',
    position: 'Head of Contents Development',
  },
  {
    nameEn: 'James Suh',
    nameKo: '서준영',
    position: 'Head of Global Brand Marketing',
  },
  {
    nameEn: 'The2Top',
    nameKo: '더투탑',
    position: 'CO-Founder',
  },
];

type LeadershipInfoType = Record<'nameEn' | 'nameKo' | 'position', string>;
