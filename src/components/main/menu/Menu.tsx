import { useNavigate, useLocation } from 'react-router-dom';
import { getBackgroundColor } from 'util/';
import { S } from './styled';

const Menu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogoClick = () => {
    navigate('/main');
  };

  const handleBrandStoryClick = () => {
    navigate('/main/brand-story');
  };

  const handleJackpotFcClick = () => {
    navigate('/main/jackpot-fc');
  };

  return (
    <S.Wrap backgroundColor={getBackgroundColor(pathname)}>
      <S.Logo onClick={handleLogoClick} />
      <S.Line />
      <S.ButtonsGroup>
        <S.Button variant='text' onClick={handleBrandStoryClick}>
          BRAND STORY
        </S.Button>
        <S.Button variant='text' onClick={handleJackpotFcClick}>
          JACKPOT FC
        </S.Button>
        <S.Button variant='text'>LEADERSHIP</S.Button>
        <S.Button variant='text'>PARTNERSHIP</S.Button>
        <S.Button variant='text'>PRESS · MEDIA</S.Button>
      </S.ButtonsGroup>
    </S.Wrap>
  );
};

export default Menu;
