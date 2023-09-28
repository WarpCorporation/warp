import { CSC } from 'components/common/styled';
import { S } from './styled';
import brandStoryBg from 'assets/background/brandStory/brand-story-bg.png';

const BrandStory = () => {
  return (
    <CSC.PageWrap>
      <CSC.Background src={brandStoryBg} alt='brand-story-bg' />
      <S.TextWrap>
        <S.Title>Brand Story</S.Title>
        <S.Divider orientation='vertical' />
        <S.Content>
          {
            '모든 스포츠와 브랜드, 선수에게는\n우리가 미처 알지 못했던 매력적인 스토리와 무한한 가능성이 숨어 있습니다'
          }
        </S.Content>
        <S.Content>
          {'WARP는 그 스토리와 가능성에 시대를 앞선 혁신을 더하기 위해 태어났습니다'}
        </S.Content>
        <S.Content>{'스포츠그룹 WARP는'}</S.Content>
        <S.Content>
          {
            '불굴의 정신, 끊임없는 희생, 정정당당한 경쟁 등 스포츠에서만 볼 수 있는 매력과 가능성에\n우주선의 워프 속도와 같은 초고속 아이디어와 무한한 창의력을 더해'
          }
        </S.Content>
        <S.Content>
          {
            '세상의 모든 스포츠 브랜드, 선수, 그리고 스포츠 매니아들에게\n지금껏 없었던 스포츠의 새로운 즐거움과 설레이는 경험을 선사하고자 합니다'
          }
        </S.Content>
        <S.Content>
          {
            '이미 WARP는 자체 Jackpot FC를 창단하여\n기존의 틀을 깨고 스포츠와 팬의 일상이 어우러진 새로운 스포츠 세상을 만들어 가고 있습니다'
          }
        </S.Content>
        <S.Content>{'지금 빛의 속도로 이동하세요'}</S.Content>
        <S.Content>
          {
            '스포츠 브랜드, 선수, 팬간의 획기적인 융합을 통해\n스포츠 팀과 장소에 의존하던 단순함을 넘어선 혁신적인 스포츠 세상으로!'
          }
        </S.Content>
        <S.Content>{'WARP가 초대합니다\n경이로운 경험을 기대하는 당신을'}</S.Content>
        <S.Logo />
      </S.TextWrap>
    </CSC.PageWrap>
  );
};

export default BrandStory;
