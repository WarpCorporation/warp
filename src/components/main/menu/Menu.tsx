import { useNavigate, useLocation } from 'react-router-dom';
import { getBackgroundColor, getMenuButtonColor } from 'util/';
import { S } from './styled';

const Menu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hoverColor = getMenuButtonColor(pathname);

  const handleLogoClick = () => {
    navigate('/main');
  };

  const handleBrandStoryClick = () => {
    navigate('/main/brand-story');
  };

  const handleJackpotFcClick = () => {
    navigate('/main/jackpot-fc');
  };

  const handleLeadershipClick = () => {
    navigate('/main/leadership');
  };

  const handlePartnershipClick = () => {
    navigate('/main/partnership');
  };

  return (
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
  );
};

export default Menu;
