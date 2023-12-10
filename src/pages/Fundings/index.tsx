import * as React from 'react';
import Header from 'components/Header';
import * as S from './style';
import FundingCard from 'components/FundingCard';
import { useEffect, useState } from 'react';
import { instance } from 'apis';

const Funding = () => {
  const [status, setStatus] = useState('PENDING');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const queryParams = {
      page: 0,
      size: 1,
      sort: ['string'],
    };

    instance
      .get(`/project?status=${status}`)
      .then((response) => {
        console.log(response.data.content);
        setProjects(response.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [status]);

  return (
    <S.Container>
      <Header />
      <S.Statuses>
        <S.Status onClick={() => setStatus('PENDING')}>펀딩 대기 중</S.Status>
        <S.Status onClick={() => setStatus('PROCESS')}>펀딩 진행 중</S.Status>
        <S.Status onClick={() => setStatus('END')}>펀딩 종료</S.Status>
      </S.Statuses>
      <S.ProjectList>
        <S.Wrapper>
          {projects.map((data, index) => (
            <FundingCard key={index} data={data} />
          ))}
        </S.Wrapper>
      </S.ProjectList>
    </S.Container>
  );
};

export default Funding;
