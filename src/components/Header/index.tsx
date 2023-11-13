import Logo from 'assets/svgs/Logo';
import * as S from './style';

const Header = () => {
  return (
    <S.Container>
      <Logo />
      <S.Elements>
        <S.Element to='/funding'>Funding</S.Element>
        <S.Element to='Registration'>Registration</S.Element>
      </S.Elements>
      <S.Button to='/login'>Login</S.Button>
    </S.Container>
  );
};

export default Header;
