import { CSC } from 'components/common/styled';
import { S } from './styled';
import { useTranslation } from 'react-i18next';
import { useImageQuery } from 'lib';
import tennis from 'assets/image/main/tennis.png';
import golf from 'assets/image/main/golf.png';
import soccer from 'assets/image/main/soccer.png';
import martialArts from 'assets/image/main/martial-arts.png';
import basketball from 'assets/image/main/basketball.png';
import textKo from 'assets/image/main/text-ko.png';
import textEn from 'assets/image/main/text-en.png';

const Intro = () => {
  const { i18n } = useTranslation();
  const isKorean = i18n.language === 'kr';
  const [textImage, tennisImage, golfImage, soccerImage, martialArtsImage, basketballImage] =
    useImageQuery([
      'main-intro',
      [isKorean ? textKo : textEn, tennis, golf, soccer, martialArts, basketball],
    ]);

  return (
    <CSC.PageWrap>
      <S.Wrap>
        <S.TextWrap>
          {isKorean ? (
            <S.Image
              top='15rem'
              left='45.875rem'
              width='28.25rem'
              height='3.25rem'
              imageUrl={textImage}
              zIndex={5}
            />
          ) : (
            <S.Image
              top='13.75rem'
              left='40rem'
              width='40rem'
              height='2.75rem'
              imageUrl={textImage}
              zIndex={5}
            />
          )}
        </S.TextWrap>
        <S.Image top='25rem' left='9rem' width='20rem' height='21rem' imageUrl={tennisImage} />
        <S.Image top='-11rem' left='19rem' width='24rem' height='24rem' imageUrl={golfImage} />
        <S.Image
          top='-30.5rem'
          left='32rem'
          width='60rem'
          height='40.5rem'
          imageUrl={soccerImage}
          zIndex={1}
        />
        <S.Image
          top='-80rem'
          left='73rem'
          width='23.75rem'
          height='26rem'
          imageUrl={martialArtsImage}
          zIndex={2}
        />
        <S.Image
          top='-92rem'
          left='87rem'
          width='24rem'
          height='24rem'
          imageUrl={basketballImage}
          zIndex={1}
        />
      </S.Wrap>
    </CSC.PageWrap>
  );
};

export default Intro;
