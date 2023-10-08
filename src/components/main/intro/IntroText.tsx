import { useState, useEffect, useMemo, useRef } from 'react';
import { S } from './styled';
import logo from 'assets/image/intro/logo.png';

type PropsType = {
  isKorean: boolean;
};

const IntroText = (props: PropsType) => {
  const { isKorean } = props;
  const [textKoOption, setTextKoOption] = useState<boolean>(false);
  const textKoTimeoutRef = useRef<NodeJS.Timeout>(null);
  const slideProps = useMemo<{ timeout: number; easing: string }>(
    () => ({ timeout: 750, easing: 'linear' }),
    []
  );

  useEffect(() => {
    //@ts-expect-error interval useRef 설정을 위한 타입 체크 skip
    textKoTimeoutRef.current = setTimeout(() => {
      setTextKoOption(!textKoOption);
    }, 5000);
  }, [textKoOption]);

  useEffect(() => {
    return () => {
      if (!textKoTimeoutRef.current) return;
      clearTimeout(textKoTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {isKorean ? (
        <S.Text top='15rem' height='3.25rem'>
          <S.Slide in={textKoOption} direction={textKoOption ? 'left' : 'right'} {...slideProps}>
            <p>
              <span>스포츠, </span>
              <span>
                <strong>즐거움</strong>의 <strong>날개</strong>를 펴다
              </span>
            </p>
          </S.Slide>
          <S.Slide in={!textKoOption} direction={textKoOption ? 'right' : 'left'} {...slideProps}>
            <p>
              <span>센세이셔널 </span>
              <S.TextKoWithImage>
                <strong>스릴부스터</strong>
                <img src={logo} alt='warp' />
              </S.TextKoWithImage>
            </p>
          </S.Slide>
        </S.Text>
      ) : (
        <S.Text top='13.75rem' height='2.75rem' isEn={!isKorean}>
          <span>IGNITING THE </span>
          <span>
            <strong>THRILL OF SPORTS</strong>
          </span>
        </S.Text>
      )}
    </>
  );
};

export default IntroText;
