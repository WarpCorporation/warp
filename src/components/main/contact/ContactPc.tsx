import { S } from './styled';

type PropsType = {
  contactKeys: string[];
  contactProps: string[];
};

const ContactPc = (props: PropsType) => {
  const { contactKeys, contactProps } = props;

  return (
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
  );
};

export default ContactPc;
