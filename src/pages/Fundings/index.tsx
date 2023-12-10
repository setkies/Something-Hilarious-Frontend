import * as React from 'react';
import Header from 'components/Header';
import * as S from './style';
import FundingCard from 'components/FundingCard';
import dummyData from 'fixtures/funding.dummy';

const Funding = () => {
  // useEffect(() => {
  //   try {
  //     (async () => {
  //       const { data } = await instance.get('/project');
  //       // if (data) {
  //       // }
  //     })();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  return (
    <S.Container>
      <Header />
      <S.ProjectList>
        <S.Wrapper>
          {dummyData.map((data, index) => (
            <FundingCard key={index} data={data} />
          ))}
        </S.Wrapper>
      </S.ProjectList>
    </S.Container>
  );
};

export default Funding;
