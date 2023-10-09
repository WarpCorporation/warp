import { useTranslation } from 'react-i18next';
import { useImageQuery } from 'lib';
import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { Header, MobileHeader } from 'components/common';
import { S } from './styled';
import picture01 from 'assets/image/leadership/profile-pic-01.png';
import picture02 from 'assets/image/leadership/profile-pic-02.png';
import picture03 from 'assets/image/leadership/profile-pic-03.png';
import picture04 from 'assets/image/leadership/profile-pic-04.png';
import picture05 from 'assets/image/leadership/profile-pic-05.png';

const Leadership = () => {
  const { i18n, t } = useTranslation();
  const isKorean = i18n.language === 'kr';
  const { type } = useRecoilValue(atom.screen);
  const queriedImages = useImageQuery([
    'leadership',
    [picture01, picture02, picture03, picture04, picture05],
  ]);
  const title = 'LEADERSHIP';

  return (
    <>
      <Header title={title} />
      <S.Wrap type={type}>
        <S.CardWrap>
          <MobileHeader title={title} marginOffset={-48} />
          {leadershipInfo.map(({ nameEn, nameKo, position }, idx) => (
            <S.Card key={nameEn} type={type}>
              <S.Picture src={queriedImages[idx]} alt={`picture-${position}`} />
              <S.Information type={type}>
                <S.Names>
                  {nameEn}
                  {isKorean && <span>{nameKo}</span>}
                </S.Names>
                <S.Position type={type}>{position}</S.Position>
                {type !== 'mobile' && <S.Divider />}
                <S.Description type={type}>
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
