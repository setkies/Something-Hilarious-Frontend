import Logo from 'assets/svgs/Logo';
import * as S from './style';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userStore from 'store/user.store';

const Header = () => {
  const user = useRecoilValue(userStore);
  return (
    <S.Container>
      <Link to='/'>
        <Logo />
      </Link>
      <S.Elements>
        <S.Element to='/funding'>Funding</S.Element>
        <S.Element to='Registration'>Registration</S.Element>
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
