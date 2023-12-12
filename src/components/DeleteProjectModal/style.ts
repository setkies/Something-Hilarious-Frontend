import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 800px;
  height: 200px;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.h1`
  ${font.$Body1};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Button = styled.button`
  width: 50%;
  height: 66px;
  border-radius: 10px;
  background-color: ${theme.rose};
  ${font.$Button1}
  color: ${theme.white};
`;
