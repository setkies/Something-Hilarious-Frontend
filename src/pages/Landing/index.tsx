import theme from 'styles/theme';
import Header from '../../components/Header';
import * as S from './style';

const Landing = () => {
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
            to='registration'
          >
            프로젝트 등록하러 가기
          </S.Button>
          <S.Button to='login'>SINP 가입하기</S.Button>
        </S.Buttons>
      </S.Contents>
    </S.Container>
  );
};

export default Landing;
