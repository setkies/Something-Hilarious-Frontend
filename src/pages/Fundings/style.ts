import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ProjectList = styled.div`
  display: flex;
  gap: 36px;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px 100px;
  gap: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Statuses = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 50px;
  width: 100%;
  padding: 0 100px;
`;

export const Status = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid ${theme.grey[300]};
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: ${theme.grey[300]};
  }
`;
