import Logo from 'assets/svgs/Logo';
import * as S from './style';
import { Link } from 'react-router-dom';
import useModal from 'hooks/useModal';
import Registration from 'components/Registration';

const Header = () => {
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
      <S.Button to='/signup'>SignUp</S.Button>
    </S.Container>
  );
};

export default Header;
