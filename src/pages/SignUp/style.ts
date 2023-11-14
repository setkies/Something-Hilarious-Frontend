import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background: ${theme.grey[100]};
`;

export const Caption = styled.p`
  color: ${theme.grey[600]};
  ${font.$p1}
`;

export const Box = styled.div`
  width: 480px;
  height: 500px;
  border-radius: 20px;
  box-shadow:
    0px 10px 15px 0px rgba(0, 0, 0, 0.03),
    0px 3px 11px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 25px 0;
  background-color: ${theme.white};
`;

export const Wraaper = styled.div`
  display: flex;
  gap: 20px;
  ${font.$Button2}
  font-size: 16px;
  align-items: center;
`;

export const Google = styled.div`
  cursor: pointer;
  width: 90%;
  height: 10%;
  border-radius: 9px;
  background-color: ${theme.grey[100]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
