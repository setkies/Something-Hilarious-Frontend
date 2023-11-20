import Logo from 'assets/svgs/Logo';
import * as S from './style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.Container>
      <Link to='/'>
        <Logo />
      </Link>
      <S.Elements>
        <S.Element to='/funding'>Funding</S.Element>
        <S.Element to='Registration'>Registration</S.Element>
      </S.Elements>
      <S.Button to='/signup'>SignUp</S.Button>
    </S.Container>
  );
};

export default Header;
