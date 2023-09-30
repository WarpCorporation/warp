import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useImageQuery } from 'lib';
import { Header } from 'components/common';
import { S } from './styled';
import picture01 from 'assets/image/leadership/profile-pic-01.png';
import picture02 from 'assets/image/leadership/profile-pic-02.png';
import picture03 from 'assets/image/leadership/profile-pic-03.png';
import picture04 from 'assets/image/leadership/profile-pic-04.png';
import picture05 from 'assets/image/leadership/profile-pic-05.png';

const Leadership = () => {
  const { i18n, t } = useTranslation();
  const isKorean = i18n.language === 'kr';
  const [qi01, qi02, qi03, qi04, qi05] = [
    useImageQuery(picture01),
    useImageQuery(picture02),
    useImageQuery(picture03),
    useImageQuery(picture04),
    useImageQuery(picture05),
  ];
  const pictures = useMemo<(string | undefined)[]>(
    () => [qi01, qi02, qi03, qi04, qi05],
    [qi01, qi02, qi03, qi04, qi05]
  );

  return (
    <>
      <Header title='LEADERSHIP' />
      <S.Wrap>
        <S.CardWrap>
          {leadershipInfo.map(({ nameEn, nameKo, position }, idx) => (
            <S.Card key={nameEn}>
              <S.Picture src={pictures[idx]} alt={`picture-${position}`} />
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
