import { S } from './styled';

type PropsType = {
  isKorean: boolean;
};

const IntroText = (props: PropsType) => {
  const { isKorean } = props;

  return (
    <>
      {isKorean ? (
        <S.Text top='15rem' width='28.25rem' height='3.25rem'>
          <span>스포츠, </span>
          <span>
            <strong>즐거움</strong>의 <strong>날개</strong>를 펴다
          </span>
        </S.Text>
      ) : (
        <S.Text top='13.75rem' width='40rem' height='2.75rem' isEn={!isKorean}>
          <span>IGNITING THE </span>
          <span>
            <strong>THRILL OF SPORTS</strong>
          </span>
        </S.Text>
      )}
    </>
  );
};

export default IntroText;
