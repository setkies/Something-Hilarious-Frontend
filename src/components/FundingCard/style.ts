import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

export const Container = styled.div`
  min-width: 280px;
  width: 280px;
  border-radius: 10px;
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  background-color: ${theme.white};
  transition: 0.75s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

export const ImageContainer = styled.div`
  padding-top: 50%;
  width: 100%;
  position: relative;
  text-decoration: none;
  background-color: ${theme.grey[300]};
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: inherit;
  transition: all 0.2s ease-out;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
`;

export const Title = styled.h2`
  ${font.$p1}
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-word;
  overflow: hidden;
  font-weight: 600;
`;

export const Description = styled.p`
  ${font.$p2}
  white-space: wrap;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;
  height: 84px;
`;
