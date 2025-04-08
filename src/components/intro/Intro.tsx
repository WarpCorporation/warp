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
  const [dialogStatus, setDialogStatus] = useState<'first' | 'second' | null>('first');
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

  const handleDialogStatusChange = () => {
    setDialogStatus((prev) => (prev === 'first' ? 'second' : null));
  };

  const handlePrevStatus = () => {
    setDialogStatus('first');
  };

  return (
    <CSC.PageWrap>
      <Dialog open={!!dialogStatus}>
        <S.DialogContent>
          {dialogStatus === 'first' ? <FirstDialogContent /> : <SecondDialogContent />}
          <S.DialogCompany>주식회사 워프 코퍼레이션</S.DialogCompany>
          <S.DialogAddress>서울특별시 서초구 안골1길 6-1, 1층 호인빌딩</S.DialogAddress>
          <S.DialogPresident>대표이사 함 정 수</S.DialogPresident>
          <S.ButtonWrap>
            {dialogStatus === 'second' && <Button onClick={handlePrevStatus}>이전</Button>}
            <Button onClick={handleDialogStatusChange}>
              {dialogStatus === 'first' ? '다음' : '확인'}
            </Button>
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

const FirstDialogContent = () => {
  return (
    <>
      <S.DialogTitle>합병 주권 및 채권자이의제출 공고</S.DialogTitle>
      <S.DialogText>
        당사는 2025년 3월 28일 개최된 임시주주총회에서 주식회사 너드프렌즈를 존속회사로 하고 당사를
        소멸회사로 하는 흡수 합병('본 건 합병')을 하기로 결의하였습니다. 본 건 합병(합병기일: 2025년
        5월 1일)에 따라 당사는 주식회사 너드프렌즈에 모든 권리, 의무를 포괄적으로 승계할 예정인바,
        본 공고 게재 익일부터 2025. 4. 30.까지, 주주는 주권제출 및 본건 합병에 이의가 있는 당사의
        채권자께서는 당사에 이의를 제출하여 주시기 바랍니다.
      </S.DialogText>
      <S.DialogDate>2025년 3월 29일</S.DialogDate>
    </>
  );
};

const SecondDialogContent = () => {
  return (
    <>
      <S.DialogTitle>{'주식회사 워프코퍼레이션\n개인정보 이전 통지문'}</S.DialogTitle>
      <S.DialogText>1. 안녕하십니까, 귀하의 무궁한 발전을 기원합니다.</S.DialogText>
      <br />
      <S.DialogText>
        2. 주식회사 워프코퍼레이션(이하 ‘본 회사’)은 개인정보보호법 제2조 제5호 규정에 따라 귀하의
        개인정보를 보유 및 관리하는 개인정보처리자로서, 동법 제27조 규정에 따라 이하 내용을 귀하께
        통지합니다.
      </S.DialogText>
      <br />
      <S.DialogText>
        3. 본 회사는 2025년 3월 28일 개최된 임시주주총회에서 주식회사 너드프렌즈를 존속회사로 하고
        본 회사를 소멸회사로 하는 흡수합병(‘본건 합병’)을 하기로 결의하여, 본 회사는 주식회사
        너드프렌즈에게 2025년 5월 1일자(“합병 기일”)로 당사의 모든 권리, 의무를 포괄적으로 승계할
        예정입니다.
      </S.DialogText>
      <br />
      <S.DialogText>
        4. 본건 합병에 따라 본 회사가 보유하고 있는 개인정보와 회사의 영업 및 서비스에 관련된 제반
        권리 및 의무도 주식회사 너드프렌즈에 포괄적으로 이전될 예정입니다. 이전에 관한 상세한 내용은
        아래를 참고하여 주시기 바랍니다.
      </S.DialogText>
      <br />
      <S.DialogText>A. 이전 날짜: 2025년 5월 1일</S.DialogText>
      <S.DialogText>B. 이전 받는 법인: 주식회사 너드프렌즈</S.DialogText>
      <S.DialogText>
        C. 이전 법인 주소: 서울 서초구 안골1길 6-1, 호인빌딩 지하1층(내곡동)
      </S.DialogText>
      <S.DialogText>
        D. 담당 부서 연락처: 전화 010-3301-2778 이메일 warp@warpsportsgroup.com
      </S.DialogText>
      <br />
      <S.DialogText>
        5. 귀하의 개인정보를 이전 받을 주식회사 너드프렌즈는 앞으로도 개인정보보호법에서 규정하는
        보호조치를 모두 준수하여 귀하의 개인정보를 안전하게 관리하고 귀하가 동의한 목적으로만
        개인정보를 처리할 것입니다. 그럼에도 귀하께서 본건 합병에 따른 개인정보 이전에 관하여 이의가
        있으시거나 동의하지 않으시는 경우 위 담당 부서에 연락하여 개인정보의 삭제 및 폐기를 요청하실
        수 있으며, 개인 정보 이전을 거부하실 경우 귀하의 정보가 삭제됨에 따라 본 회사의 서비스 제공
        또는 귀하와의 계약에 따른 의무의 이행이 불가할 수 있습니다. 개인정보의 이전을 거부하시더라도
        관계 법령에서 규정하고 있는 의무를 준수하기 위해 개인정보가 보관될 수 있습니다.
      </S.DialogText>
      <br />
      <S.DialogText>
        6. 위 이전 날짜 전까지 별도의 이의를 제기하지 않으실 경우 개인정보 이전에 동의하시는 것으로
        간주됩니다. 감사합니다.
      </S.DialogText>
      <S.DialogDate>2025년 3월 28일</S.DialogDate>
    </>
  );
};
