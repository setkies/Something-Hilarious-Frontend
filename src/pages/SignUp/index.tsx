import Logo from 'assets/svgs/Logo';
import * as S from './style';
import GoogleLogo from 'assets/svgs/Google';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <S.Container>
      <Link to='/'>
        <Logo height={62} />
      </Link>
      <S.Caption>뭐라뭐라 시켜줘 금잔디 명예 소방관</S.Caption>
      <S.Caption>흰 천과 바람만 있으면 어디든 갈수 있는 사람이 있다?</S.Caption>
      <S.Box>
        <S.Google
          href={
            'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=970720182911-59gd0mpq1r4aojrmcsn7t7jr6hu7p1q2.apps.googleusercontent.com&redirect_uri=http://localhost:3000/auth/google&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&service=lso&o2v=1&theme=glif&flowName=GeneralOAuthFlow'
          }
        >
          <S.Wraaper>
            <GoogleLogo />
            구글로 시작하기
          </S.Wraaper>
        </S.Google>
      </S.Box>
    </S.Container>
  );
};

export default SignUp;
