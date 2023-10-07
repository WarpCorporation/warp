import { useMemo } from 'react';
import { useImageQuery } from 'lib';
import { Header } from 'components/common';
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

  return (
    <>
      <Header title='CONTACT' />
      <S.Wrap>
        <S.Logo src={logo} alt='warp' />
        <S.ContactInfo>
          <S.InfoWrap>
            {contactKeys.map((contactKey) => (
              <S.Key key={contactKey}>{contactKey}</S.Key>
            ))}
          </S.InfoWrap>
          <S.Divider orientation='vertical' />
          <S.InfoWrap>
            {contactProps.map((contactProp) => (
              <S.Prop key={contactProp}>{contactProp}</S.Prop>
            ))}
          </S.InfoWrap>
        </S.ContactInfo>
      </S.Wrap>
    </>
  );
};

export default Contact;
