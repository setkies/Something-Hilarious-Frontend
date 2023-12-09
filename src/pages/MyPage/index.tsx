import React, { useEffect } from 'react';
import Header from 'components/Header';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userStore from 'store/user.store';
import { instance } from 'apis';

const MyPage = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userStore);

  if (!user) {
    return <>error</>;
  }

  const handleLogout = () => {
    navigate('/');
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      const { data } = await instance.get('/project/me');
    })();
  }, []);

  return (
    <S.Contaienr>
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
        <S.Projects></S.Projects>
      </S.Contents>
    </S.Contaienr>
  );
};

export default MyPage;
