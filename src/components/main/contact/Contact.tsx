import { useMemo } from 'react';
import { useImageQuery } from 'lib';
import { useRecoilValue } from 'recoil';
import { atom } from 'recoil/atom';
import { Header, MobileHeader } from 'components/common';
import ContactPc from './ContactPc';
import ContactMobile from './ContactMobile';
import { S } from './styled';
import warpLogo from 'assets/image/common/logo-black.png';

const Contact = () => {
  const [logo] = useImageQuery(['partnership', [warpLogo]]);
  const contactKeys = useMemo<string[]>(
    () => ['사업자명', '대표자명', '주소', '고객센터', '언론홍보 및 기타 문의'],
    []
  );
  const contactProps = useMemo<string[]>(
    () => [
      '주식회사 워프코퍼레이션',
      '함정수',
      '서울시 강남구 역삼로 26길 3, 2층',
      'warp@warp.associates',
      'jh@warp.associates',
    ],
    []
  );
  const { type } = useRecoilValue(atom.screen);
  const title = 'CONTACT';

  return (
    <>
      <Header title={title} />
      <S.Wrap>
        <MobileHeader title={title} />
        {type !== 'mobile' && <S.Logo src={logo} alt='warp' />}
        {type !== 'mobile' ? (
          <ContactPc contactKeys={contactKeys} contactProps={contactProps} />
        ) : (
          <ContactMobile contactKeys={contactKeys} contactProps={contactProps} />
        )}
      </S.Wrap>
    </>
  );
};

export default Contact;
