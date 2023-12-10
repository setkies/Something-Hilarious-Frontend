import * as React from 'react';
import Header from 'components/Header';
import * as S from './style';
import FundingCard from 'components/FundingCard';
import dummyData from 'fixtures/funding.dummy';
import { useEffect } from 'react';

const Funding = () => {
  return (
    <S.Container>
      <Header />
      <S.Statuses>
        <S.Status>펀딩 대기 중</S.Status>
        <S.Status>펀딩 진행 중</S.Status>
        <S.Status>펀딩 종료</S.Status>
      </S.Statuses>
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
