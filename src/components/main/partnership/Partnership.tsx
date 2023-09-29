import { Header } from 'components/common';
import { S } from './styled';
import logos from 'assets/image/partnership/partner-logos.png';

const Partnership = () => {
  return (
    <>
      <Header title='PARTNERSHIP' />
      <S.Wrap>
        <S.TitleWrap>
          <S.TopDivider dir='left' />
          <S.Title>Major Clients</S.Title>
          <S.TopDivider dir='right' />
        </S.TitleWrap>
        <S.Logos src={logos} alt='partners' />
        <S.BottomDivider />
        <S.WhiteSpace />
      </S.Wrap>
    </>
  );
};

export default Partnership;
