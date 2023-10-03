import { CSC } from 'components/common/styled';
import { S } from './styled';
import { useTranslation } from 'react-i18next';
import { useImageQuery } from 'lib';
import mainIntroBg from 'assets/background/main/main-bg.png';
import textKo from 'assets/image/main/text-ko.png';
import textEn from 'assets/image/main/text-en.png';

const Intro = () => {
  const { i18n } = useTranslation();
  const isKorean = i18n.language === 'kr';
  const [textImage, mainBg] = useImageQuery([
    'main-intro',
    [isKorean ? textKo : textEn, mainIntroBg],
  ]);

  return (
    <CSC.PageWrap>
      <CSC.Background src={mainBg} alt='main-intro-bg' />
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
      </S.Wrap>
    </CSC.PageWrap>
  );
};

export default Intro;
