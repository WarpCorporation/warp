import { useNavigate, useLocation } from 'react-router-dom';
import { getBackgroundColor, getMenuButtonColor } from 'util/';
import { S } from './styled';
import logo from 'assets/image/common/logo-white.png';

type PropsType = {
  handlePageChange: (newStatus: boolean) => void;
};

const Menu = (props: PropsType) => {
  const { handlePageChange } = props;
  const navigate = useNavigate();
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

  return (
    <S.Wrap backgroundColor={getBackgroundColor(pathname)}>
      <S.Logo onClick={handleLogoClick} src={logo} alt='logo' />
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
        <S.Button variant='text' onClick={handlePressMediaClick} hoverColor={hoverColor}>
          PRESS · MEDIA
        </S.Button>
        <S.Button variant='text' onClick={handleContactClick} hoverColor={hoverColor}>
          CONTACT
        </S.Button>
      </S.ButtonsGroup>
    </S.Wrap>
  );
};

export default Menu;
