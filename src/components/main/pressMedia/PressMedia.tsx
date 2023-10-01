import { Header } from 'components/common';
import { pressData } from 'constants/';
import { S } from './styled';

const PressMedia = () => {
  const handleMoreButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Header title='PRESS · MEDIA' />
      <S.Wrap>
        <S.CardWrap>
          {pressData.map(({ title, url, description, date }) => (
            <S.Card key={description}>
              <S.CardRow>
                <S.Title>{title}</S.Title>
                <S.Date>{date}</S.Date>
              </S.CardRow>
              <S.Divider />
              <S.Description>{description}</S.Description>
              <S.ButtonWrap onClick={() => handleMoreButtonClick(url)}>
                <S.MoreButton>+</S.MoreButton>more
              </S.ButtonWrap>
            </S.Card>
          ))}
        </S.CardWrap>
      </S.Wrap>
    </>
  );
};

export default PressMedia;
