import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contents = styled.div`
  padding-top: 70px;
  box-sizing: border-box;
  display: flex;
`;

export const Thumbnail = styled.div`
  width: 600px;
  height: 350px;
  border-radius: 10px;
  background-color: ${theme.grey[400]};
  margin-right: 30px;
`;

export const Title = styled.p`
  ${font.$Body2};
  margin-bottom: 48px;
`;

export const Description = styled.p`
  ${font.$Body3};
  color: ${theme.grey[700]};
`;

export const Wrapper = styled.div`
  width: 40%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  height: 350px;
`;

export const Progresses = styled.div`
  display: flex;
  gap: 10px;
`;

export const Progress = styled.span`
  ${font.$Body2};
  color: ${theme.rose};
`;

export const Horizon = styled.div`
  width: 594px;
  height: 2px;
  background-color: ${theme.grey[400]};
  margin: 16px 0;
`;

export const Button = styled.button`
  width: 594px;
  height: 66px;
  background-color: ${theme.rose};
  color: ${theme.white};
  border-radius: 10px;
  ${font.$Button1};
`;
