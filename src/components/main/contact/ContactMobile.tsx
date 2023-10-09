import { S } from './styled';

type PropsType = {
  contactKeys: string[];
  contactProps: string[];
};

const ContactMobile = (props: PropsType) => {
  const { contactKeys, contactProps } = props;

  return (
    <S.MobileWrap>
      {contactKeys.map((key, idx) => (
        <S.MobileRow key={key}>
          <S.MobileKey>{key}</S.MobileKey>
          <S.MobileProp>{contactProps[idx]}</S.MobileProp>
        </S.MobileRow>
      ))}
    </S.MobileWrap>
  );
};

export default ContactMobile;
