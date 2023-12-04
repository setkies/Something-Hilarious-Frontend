import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Contaienr = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Contents = styled.div`
  width: 100%;
  padding: 60px 120px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  ${font.$H1};
`;

export const Wallets = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  gap: 45px;
`;

export const Wallet = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${theme.grey[200]};
  border-radius: 24px;
  padding: 26px;
  box-sizing: border-box;
`;

export const WalletTitle = styled.h1`
  ${font.$Body1};
  background: none;
`;

export const Money = styled.h2`
  ${font.$H1};
  background: none;
`;

export const Horizon = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.grey[400]};
  margin: 50px 0;
`;

export const Projects = styled.div`
  width: 100%;
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
`;
