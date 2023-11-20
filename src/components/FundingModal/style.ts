import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 800px;
  height: 500px;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 66px;
  border: 1px solid ${theme.grey[400]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  height: 66px;
  border-radius: 10px;
  background-color: ${theme.rose};
  ${font.$Button1}
  color: ${theme.white};
`;

export const Description = styled.h1`
  ${font.$Body1};
  text-align: center;
`;
