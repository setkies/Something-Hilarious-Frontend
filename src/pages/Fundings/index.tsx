import Header from 'components/Header';
import * as S from './style';
import FundingCard from 'components/FundingCard';

const Funding = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <FundingCard />
        <FundingCard />
        <FundingCard />
        <FundingCard />
        <FundingCard />
        <FundingCard />
        <FundingCard />
        <FundingCard />
      </S.Wrapper>
    </S.Container>
  );
};

export default Funding;
