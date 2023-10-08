import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { CSC } from 'components/common/styled';
import { S } from './styled';
import { useTranslation } from 'react-i18next';
import { useImageQuery } from 'lib';
import IntroText from './IntroText';
import mainIntroBg from 'assets/background/main/main-bg.png';

const Intro = () => {
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const { i18n } = useTranslation();
  const isKorean = i18n.language === 'kr';
  const [mainBg] = useImageQuery(['main-intro', [mainIntroBg]]);
  const { type } = useRecoilValue(atom.screen);

  useEffect(() => {
    if (type !== 'mobile') {
      setStartAnimation(false);
      return;
    }
    setTimeout(() => {
      setStartAnimation(true);
    }, 5000);
  }, [type]);

  return (
    <CSC.PageWrap>
      <CSC.Background
        className={startAnimation ? 'main-intro-bg-animation' : ''}
        src={mainBg}
        height='calc(100vh - 9.5rem)'
        transform={`translate(${startAnimation ? '-52.5%' : 0}, 2rem)`}
        alt='main-intro-bg'
      />
      <S.TextWrap>
        <IntroText isKorean={isKorean} />
      </S.TextWrap>
    </CSC.PageWrap>
  );
};

export default Intro;
