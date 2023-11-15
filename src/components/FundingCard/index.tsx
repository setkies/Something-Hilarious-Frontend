import * as S from './style';

const FundingCard = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Title>
          [단독공개 | 눈내리는케이크] 크리스마스를 위한 홍대케이크맛집
        </S.Title>
        <S.Description>
          [누적 2.5억] 겨울에는 따뜻하게 달궈드리겠습니다. 사갓 캠핑 쉘터
        </S.Description>
      </S.InfoContainer>
    </S.Container>
  );
};

export default FundingCard;
