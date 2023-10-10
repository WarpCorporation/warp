import { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { S } from './styled';
import logo from 'assets/image/common/logo-white.png';

type PropsType = {
  pathname?: string;
  children?: JSX.Element;
};

const Loading = (props: PropsType) => {
  const { pathname, children } = props;
  const [animationClassName, setAnimationClassName] = useState<Record<
    'top' | 'bottom',
    string
  > | null>(null);
  const [animationDone, setAnimationDone] = useState<boolean>(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout>(null);

  useLayoutEffect(() => {
    setAnimationClassName(null);
    setAnimationDone(false);
  }, [pathname]);

  useEffect(() => {
    if (!pathname) return;
    setAnimationClassName({
      top: 'top-loading-animation',
      bottom: 'bottom-loading-animation',
    });
    //@ts-expect-error timeout useRef 설정을 위한 타입 체크 skip
    animationTimeoutRef.current = setTimeout(() => {
      setAnimationDone(true);
    }, 3750);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (!animationTimeoutRef.current) return;
      clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {!animationDone && (
        <S.Wrap isTransparent={!!animationClassName}>
          <S.Cover />
          <S.TopWrap className={animationClassName?.top} />
          <S.LogoWrap className={pathname ? 'logo-loading-animation' : 'logo-for-unloaded'}>
            <S.Logo src={logo} alt='logo' />
          </S.LogoWrap>
          {pathname && <S.Divider className='divider-loading-animation' />}
          <S.BottomWrap className={animationClassName?.bottom} />
        </S.Wrap>
      )}
      {children}
    </>
  );
};

export default Loading;
