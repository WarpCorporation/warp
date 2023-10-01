import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getBackgroundColor, getMenuButtonColor } from 'util/';
import { CSC } from 'components/common/styled';
import { S } from './styled';

const Menu = () => {
  const [shouldClose, setShouldClose] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hoverColor = getMenuButtonColor(pathname);

  const movePage = (path: string) => {
    const newPath = `/main${path}`;
    if (newPath === pathname) return;
    setShouldClose(true);
    setTimeout(() => {
      navigate(newPath);
    }, 1000);
    setTimeout(() => {
      setShouldClose(false);
    }, 1500);
  };

  const handleLogoClick = () => {
    movePage('');
  };

  const handleBrandStoryClick = () => {
    movePage('/brand-story');
  };

  const handleJackpotFcClick = () => {
    movePage('/jackpot-fc');
  };

  const handleLeadershipClick = () => {
    movePage('/leadership');
  };

  const handlePartnershipClick = () => {
    movePage('/partnership');
  };

  return (
    <>
      <S.Wrap backgroundColor={getBackgroundColor(pathname)}>
        <S.Logo onClick={handleLogoClick} />
        <S.Line />
        <S.ButtonsGroup>
          <S.Button variant='text' onClick={handleBrandStoryClick} hoverColor={hoverColor}>
            BRAND STORY
          </S.Button>
          <S.Button variant='text' onClick={handleJackpotFcClick} hoverColor={hoverColor}>
            JACKPOT FC
          </S.Button>
          <S.Button variant='text' onClick={handleLeadershipClick} hoverColor={hoverColor}>
            LEADERSHIP
          </S.Button>
          <S.Button variant='text' onClick={handlePartnershipClick} hoverColor={hoverColor}>
            PARTNERSHIP
          </S.Button>
          <S.Button variant='text' hoverColor={hoverColor}>
            PRESS · MEDIA
          </S.Button>
        </S.ButtonsGroup>
      </S.Wrap>
      <CSC.Closing
        shouldClose={shouldClose}
        isTop
        className={shouldClose ? 'top-closing-animation' : ''}
      />
      <CSC.Closing
        shouldClose={shouldClose}
        className={shouldClose ? 'bottom-closing-animation' : ''}
      />
    </>
  );
};

export default Menu;
