import { useLayoutEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { Header, MobileHeader } from 'components/common';
import { pressData } from 'constants/';
import { S } from './styled';

const PressMedia = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { type } = useRecoilValue(atom.screen);
  const title = 'PRESS · MEDIA';

  const handleMoreButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  useLayoutEffect(() => {
    wrapRef.current?.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title='PRESS · MEDIA' />
      <S.Wrap type={type} ref={wrapRef}>
        <S.CardWrap type={type}>
          <MobileHeader title={title} marginOffset={32} />
          {pressData.map(({ title, url, description, date }) => (
            <S.Card key={description}>
              <S.CardRow type={type}>
                <S.Title>{title}</S.Title>
                <S.Date>{date}</S.Date>
              </S.CardRow>
              <S.Divider />
              <S.Description type={type}>{description}</S.Description>
              <S.ButtonWrap type={type} onClick={() => handleMoreButtonClick(url)}>
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
