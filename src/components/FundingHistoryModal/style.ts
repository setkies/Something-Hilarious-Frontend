import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 800px;
  height: 700px;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

export const ModalTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Value = styled.div`
  width: 100%;
  height: 30px;
  border-top: 1px solid ${theme.grey[300]};
  border-bottom: 1px solid ${theme.grey[300]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
