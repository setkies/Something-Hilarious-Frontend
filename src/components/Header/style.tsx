import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 100px;
  box-sizing: border-box;
  gap: 200px;
`;

export const Button = styled(Link)`
  width: 120px;
  height: 40px;
  border: 1px ${theme.grey[400]} solid;
  border-radius: 10px;
  background-color: ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

export const Elements = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
`;

export const Element = styled(Link)`
  ${font.$p1};
  color: black;
  :hover {
    color: ${theme.rose};
  }
`;

export const P1 = styled.p`
  ${font.$p1};
  cursor: pointer;
`;
