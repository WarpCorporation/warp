import { useNavigate, useLocation } from 'react-router-dom';
import { getBackgroundColor } from 'util/';
import { S } from './styled';

const Menu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleBrancStoryClick = () => {
    navigate('/main/brand-story');
  };

  return (
    <S.Wrap backgroundColor={getBackgroundColor(pathname)}>
      <S.Logo />
      <S.Line />
      <S.ButtonsGroup>
        <S.Button variant='text' onClick={handleBrancStoryClick}>
          BRAND STORY
        </S.Button>
        <S.Button variant='text'>JACKPOT FC</S.Button>
        <S.Button variant='text'>LEADERSHIP</S.Button>
        <S.Button variant='text'>PARTNERSHIP</S.Button>
        <S.Button variant='text'>PRESS · MEDIA</S.Button>
      </S.ButtonsGroup>
    </S.Wrap>
  );
};

export default Menu;
