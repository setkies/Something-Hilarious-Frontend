import Logo from 'assets/svgs/Logo';
import * as S from './style';

const Header = () => {
  return (
    <S.Container>
      <Logo />
      <S.Button>Login</S.Button>
    </S.Container>
  );
};

export default Header;
