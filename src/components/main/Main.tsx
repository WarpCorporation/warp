import { M } from './styled';
import { useTranslation } from 'react-i18next';
import tennisImage from 'assets/image/main/tennis.png';
import golfImage from 'assets/image/main/golf.png';
import soccerImage from 'assets/image/main/soccer.png';
import martialArtsImage from 'assets/image/main/martial-arts.png';
import basketballImage from 'assets/image/main/basketball.png';
import textKo from 'assets/image/main/text-ko.png';
import textEn from 'assets/image/main/text-en.png';

const Main = () => {
  const { i18n } = useTranslation();

  return (
    <M.Wrap>
      <M.TextWrap>
        {i18n.language === 'kr' ? (
          <M.Image
            top='15rem'
            left='45.875rem'
            width='28.25rem'
            height='3.25rem'
            imageUrl={textKo}
            zIndex={5}
          />
        ) : (
          <M.Image
            top='13.75rem'
            left='40rem'
            width='40rem'
            height='2.75rem'
            imageUrl={textEn}
            zIndex={5}
          />
        )}
      </M.TextWrap>
      <M.Image top='25rem' left='9rem' width='20rem' height='21rem' imageUrl={tennisImage} />
      <M.Image top='9rem' left='19rem' width='24rem' height='24rem' imageUrl={golfImage} />
      <M.Image
        bottom={0}
        left='32rem'
        width='60rem'
        height='40.5rem'
        imageUrl={soccerImage}
        zIndex={1}
      />
      <M.Image
        top='9rem'
        left='73rem'
        width='23.75rem'
        height='26rem'
        imageUrl={martialArtsImage}
        zIndex={2}
      />
      <M.Image
        top='23rem'
        left='87rem'
        width='24rem'
        height='24rem'
        imageUrl={basketballImage}
        zIndex={1}
      />
    </M.Wrap>
  );
};

export default Main;
