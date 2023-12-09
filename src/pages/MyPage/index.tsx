import Header from 'components/Header';
import * as S from './style';
import dummyData from 'fixtures/funding.dummy';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
    localStorage.clear();
    window.location.reload();
  };
  return (
    <S.Contaienr>
      <Header />
      <S.Contents>
        <S.Wrapper>
          <S.Title>{dummyData[0].author} 님의 마이페이지</S.Title>
          <h1 onClick={handleLogout}>로그아웃</h1>
        </S.Wrapper>
        <S.Wallets>
          <S.Wallet>
            <S.WalletTitle>{dummyData[0].author} 님의 지갑</S.WalletTitle>
            <S.Money>123,456 원</S.Money>
            <S.Horizon />
          </S.Wallet>
          <S.Wallet></S.Wallet>
        </S.Wallets>
        <S.Horizon />
        <S.Title>{dummyData[0].author} 님의 프로젝트</S.Title>
        <S.Projects></S.Projects>
      </S.Contents>
    </S.Contaienr>
  );
};

export default MyPage;
