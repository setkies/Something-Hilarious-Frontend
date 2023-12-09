import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 800px;
  height: 600px;
  border-radius: 20px;
  padding: 22px 76px;
  box-sizing: border-box;
`;

export const ModalContents = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  ${font.$H4}
`;

export const Button = styled.button`
  width: 120px;
  height: 60px;
  background: ${theme.rose};
  border-radius: 8px;
  ${font.$Button1};
  color: ${theme.white};
`;

export const Body = styled.h1`
  ${font.$Body2}
`;

export const Input = styled.input`
  width: 100%;
  height: 66px;
  border-radius: 10px;
  border: 1px solid ${theme.grey[400]};
  &::placeholder {
    ${font.$Body3};
    color: ${theme.grey[400]};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 260px;
  resize: none;
  border: 1px solid ${theme.grey[400]};
  border-radius: 10px;
  margin-bottom: 16px;
  &::placeholder {
    ${font.$Body3};
    color: ${theme.grey[400]};
  }
`;

export const UploadImage = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  background-color: ${theme.grey[400]};
  margin-bottom: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageLabel = styled.label`
  width: 100%;
  height: 100%;
  background-color: ${theme.grey[400]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InputImage = styled.img`
  height: 100%;
`;
