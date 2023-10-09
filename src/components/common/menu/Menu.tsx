import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { getBackgroundColor, getMenuButtonColor } from 'util/';
import { S } from './styled';
import logo from 'assets/image/common/logo-white.png';

type PropsType = {
  handlePageChange: (newStatus: boolean) => void;
};

const Menu = (props: PropsType) => {
  const { handlePageChange } = props;
  const navigate = useNavigate();
  const { type } = useRecoilValue(atom.screen);
  const { pathname } = useLocation();
  const hoverColor = getMenuButtonColor(pathname);

  const movePage = (path: string) => {
    const newPath = `/main${path}`;
    if (newPath === pathname) return;
    handlePageChange(true);
    setTimeout(() => {
      navigate(newPath);
    }, 1000);
    setTimeout(() => {
      handlePageChange(false);
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

  const handlePressMediaClick = () => {
    movePage('/press-media');
  };

  const handleContactClick = () => {
    movePage('/contact');
  };

  const ButtonsGroup = type !== 'pc' ? S.Scroll : S.ButtonsGroup;

  return (
    <S.Wrap backgroundColor={getBackgroundColor(pathname)} isMobile={type !== 'pc'}>
      <S.Logo onClick={handleLogoClick} src={logo} alt='logo' />
      {type === 'pc' && <S.Line />}
      <ButtonsGroup horizontal type={type}>
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
        <S.Button variant='text' onClick={handlePressMediaClick} hoverColor={hoverColor}>
          PRESS · MEDIA
        </S.Button>
        <S.Button variant='text' onClick={handleContactClick} hoverColor={hoverColor}>
          CONTACT
        </S.Button>
      </ButtonsGroup>
      {type !== 'pc' && <S.Line isMobile />}
    </S.Wrap>
  );
};

export default Menu;
