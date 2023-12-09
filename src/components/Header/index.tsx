import Logo from 'assets/svgs/Logo';
import * as S from './style';
import { Link } from 'react-router-dom';
import useModal from 'hooks/useModal';
import Registration from 'components/Registration';
import { useRecoilValue } from 'recoil';
import userStore from 'store/user.store';

const Header = () => {
  const user = useRecoilValue(userStore);
  const { openModal, closeModal } = useModal();

  const modalOpen = () => {
    openModal({
      component: <Registration closeModal={closeModal} />,
    });
  };
  return (
    <S.Container>
      <Link to='/'>
        <Logo />
      </Link>
      <S.Elements>
        <S.Element to='/funding'>Funding</S.Element>
        <S.P1 onClick={modalOpen}>Registration</S.P1>
      </S.Elements>
      {user ? (
        <S.Button to='/mypage'>My Page</S.Button>
      ) : (
        <S.Button to='/signup'>Sign Up</S.Button>
      )}
    </S.Container>
  );
};

export default Header;
