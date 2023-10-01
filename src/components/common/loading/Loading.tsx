import { useState, useLayoutEffect, useEffect } from 'react';
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

  useLayoutEffect(() => {
    setAnimationClassName(null);
    setAnimationDone(false);
    setRenderChild(false);
  }, [pathname]);

  useEffect(() => {
    if (!pathname) return;
    setAnimationClassName({
      top: 'top-loading-animation',
      bottom: 'bottom-loading-animation',
    });
    const renderTimeout = setTimeout(() => {
      setRenderChild(true);
      setBackgroundColor(getBackgroundColor(pathname));
    }, 1000);
    const animationTimeout = setTimeout(() => {
      setAnimationDone(true);
    }, 3000);

    return () => {
      clearTimeout(renderTimeout);
      clearTimeout(animationTimeout);
    };
  }, [pathname]);

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
