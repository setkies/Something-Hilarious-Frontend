import theme from 'styles/theme';
import Header from 'components/Header';
import * as S from './style';
import userStore from 'store/user.store';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import useModal from 'hooks/useModal';
import Registration from 'components/Registration';

const Landing = () => {
  const user = useRecoilValue(userStore);
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    localStorage.clear();
    window.location.reload();
  };

  const modalOpen = () => {
    openModal({
      component: <Registration closeModal={closeModal} />,
    });
  };

  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.SubTitle>
          사이드 프로젝트 펀딩을 통해 당신의 프로젝트를 더 키워보세요.
        </S.SubTitle>
        <S.Title>펀딩을 통해서</S.Title>
        <S.Title>여러분의 프로젝트를</S.Title>
        <S.Title>성장시켜 보세요.</S.Title>
        <S.Buttons>
          <S.Button
            style={{
              border: 'none',
              color: theme.white,
              background: theme.black,
            }}
            onClick={modalOpen}
          >
            프로젝트 등록하기
          </S.Button>
          {user ? (
            <S.Button onClick={handleLogout}>로그아웃</S.Button>
          ) : (
            <S.Button onClick={() => navigate('/signup')}>
              SINP 가입하기
            </S.Button>
          )}
        </S.Buttons>
      </S.Contents>
      <img />
    </S.Container>
  );
};

export default Landing;
