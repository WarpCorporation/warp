import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { useTranslation } from 'react-i18next';
import { Dialog, Button } from '@mui/material';
import { CSC } from 'components/common/styled';
import { S } from './styled';
import { screen } from 'constants/';
import introBg from 'assets/background/intro/intro-bg.png';
import introMobileBg from 'assets/background/intro/intro-mobile-bg.png';

type PropsType = {
  handlePageChange: (newStatus: boolean) => void;
};

const Intro = (props: PropsType) => {
  const { handlePageChange } = props;
  const [dialogOpen, setDialogOpen] = useState<boolean>(true);
  const navigate = useNavigate();
  const { type } = useRecoilValue(atom.screen);
  const { i18n } = useTranslation();

  const navigateToMain = () => {
    handlePageChange(true);
    setTimeout(() => {
      navigate('/main');
    }, 1000);
    setTimeout(() => {
      handlePageChange(false);
    }, 1500);
  };

  const handleKoreanClick = () => {
    i18n.changeLanguage('kr');
    sessionStorage.setItem('@warp_language', 'kr');
    navigateToMain();
  };

  const handleEnglishClick = () => {
    i18n.changeLanguage('en');
    sessionStorage.setItem('@warp_language', 'en');
    navigateToMain();
  };

  return (
    <CSC.PageWrap>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <S.DialogContent>
          <S.DialogTitle>합병 주권 및 채권자이의제출 공고</S.DialogTitle>
          <S.DialogText>
            당사는 2025년 3월 28일 개최된 임시주주총회에서 주식회사 너드프렌즈를 존속회사로 하고
            당사를 소멸회사로 하는 흡수 합병('본 건 합병')을 하기로 결의하였습니다. 본 건
            합병(합병기일: 2025년 5월 1일)에 따라 당사는 주식회사 너드프렌즈에 모든 권리, 의무를
            포괄적으로 승계할 예정인바, 본 공고 게재 익일부터 2025. 4. 30.까지, 주주는 주권제출 및
            본건 합병에 이의가 있는 당사의 채권자께서는 당사에 이의를 제출하여 주시기 바랍니다.
          </S.DialogText>
          <S.DialogDate>2025년 3월 29일</S.DialogDate>
          <S.DialogCompany>주식회사 워프 코퍼레이션</S.DialogCompany>
          <S.DialogAddress>서울특별시 서초구 안골1길 6-1, 1층 호인빌딩</S.DialogAddress>
          <S.DialogPresident>대표이사 함 정 수</S.DialogPresident>
          <S.ButtonWrap>
            <Button onClick={() => setDialogOpen(false)}>확인</Button>
          </S.ButtonWrap>
        </S.DialogContent>
      </Dialog>
      <CSC.Background
        src={type === 'mobile' ? introMobileBg : introBg}
        alt='intro-bg'
        minWidth={screen.minWidth}
      />
      <S.ButtonsGroup>
        <S.LanguageButton onClick={handleKoreanClick}>
          <span>KOR</span>
        </S.LanguageButton>
        <S.LanguageButton onClick={handleEnglishClick}>
          <span>ENG</span>
        </S.LanguageButton>
      </S.ButtonsGroup>
    </CSC.PageWrap>
  );
};

export default Intro;
