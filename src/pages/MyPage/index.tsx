import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userStore from 'store/user.store';
import { instance } from 'apis';
import FundingCard from 'components/FundingCard';

const MyPage = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userStore);
  const [project, setProject] = useState([]);

  if (!user) {
    return <div>error</div>;
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const { data } = await instance.get('/project/me');
        if (data) {
          setProject(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjectData();
  }, [instance, setProject]);

  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.Wrapper>
          <S.Title>{user.name} 님의 마이페이지</S.Title>
          <h1 onClick={handleLogout}>로그아웃</h1>
        </S.Wrapper>
        <S.Wallets>
          <S.Wallet>
            <S.WalletTitle>{user.name} 님의 지갑</S.WalletTitle>
            <S.Money>{user.wallet.money.toLocaleString()} 원</S.Money>
            <S.Horizon />
          </S.Wallet>
        </S.Wallets>
        <S.Horizon />
        <S.Title>{user.name} 님의 프로젝트</S.Title>
        <S.Projects>
          {/* eslint-disable-next-line */}
          {project.map((data, index) => (
            <FundingCard key={index} data={data} />
          ))}
        </S.Projects>
      </S.Contents>
    </S.Container>
  );
};

export default MyPage;
