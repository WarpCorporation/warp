import { useImageQuery } from 'lib';
import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { Header, MobileHeader } from 'components/common';
import { S } from './styled';
import logos from 'assets/image/partnership/partner-logos.png';
import mobileLogos from 'assets/image/partnership/partner-mobile-logos.png';

const Partnership = () => {
  const [partnerLogos, partnerMobileLogos] = useImageQuery(['partnership', [logos, mobileLogos]]);
  const { type } = useRecoilValue(atom.screen);
  const title = 'PARTNERSHIP';

  return (
    <>
      <Header title={title} />
      <S.Wrap type={type}>
        <MobileHeader title={title} />
        <S.TitleWrap type={type}>
          <S.TopDivider dir='left' type={type} />
          <S.Title type={type}>Major Clients</S.Title>
          <S.TopDivider dir='right' type={type} />
        </S.TitleWrap>
        <S.Logos
          type={type}
          src={type === 'mobile' ? partnerMobileLogos : partnerLogos}
          alt='partners'
        />
        <S.BottomDivider type={type} />
        {type !== 'mobile' && <S.WhiteSpace />}
      </S.Wrap>
    </>
  );
};

export default Partnership;
