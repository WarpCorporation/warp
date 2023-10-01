import { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { S } from './styled';
import { palette } from 'constants/';
import { getBackgroundColor } from 'util/';

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
  const [renderChild, setRenderChild] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>(palette.dark);
  const renderTimeoutRef = useRef<NodeJS.Timeout>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout>(null);

  useLayoutEffect(() => {
    setAnimationClassName(null);
    setAnimationDone(false);
    setRenderChild(false);
  }, [pathname]);

  useEffect(() => {
    if (!pathname) return;
    if (renderTimeoutRef.current || animationTimeoutRef.current) return;
    setAnimationClassName({
      top: 'top-loading-animation',
      bottom: 'bottom-loading-animation',
    });
    if (renderTimeoutRef.current) {
      clearTimeout(renderTimeoutRef.current);
    }
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    //@ts-expect-error timeout useRef 설정을 위한 타입 체크 skip
    renderTimeoutRef.current = setTimeout(() => {
      setRenderChild(true);
      setBackgroundColor(getBackgroundColor(pathname));
    }, 1000);
    //@ts-expect-error timeout useRef 설정을 위한 타입 체크 skip
    animationTimeoutRef.current = setTimeout(() => {
      setAnimationDone(true);
    }, 3000);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (!renderTimeoutRef.current || !animationTimeoutRef.current) return;
      clearTimeout(renderTimeoutRef.current);
      clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <S.Wrap animationDone={animationDone} backgroundColor={backgroundColor}>
        <S.TopWrap className={animationClassName?.top} />
        <S.LogoWrap className={pathname ? 'logo-loading-animation' : 'logo-for-unloaded'}>
          <S.Logo />
        </S.LogoWrap>
        {pathname && <S.Divider className='divider-loading-animation' />}
        <S.BottomWrap className={animationClassName?.bottom} />
      </S.Wrap>
      {renderChild && children}
    </>
  );
};

export default Loading;
