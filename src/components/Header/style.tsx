import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  box-sizing: border-box;
  border-bottom: 0.5px ${theme.grey[200]} solid;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  border: 1px ${theme.grey[400]} solid;
  border-radius: 10px;
  background-color: ${theme.white};
`;
