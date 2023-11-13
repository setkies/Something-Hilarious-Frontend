import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { font } from 'styles/font';
import theme from 'styles/theme';

// interface GradientProps {
//   text: string;
// }

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const SubTitle = styled.p`
  ${font.$p1};
  color: ${theme.grey[600]};
  margin-bottom: 24px;
`;

export const Title = styled.div`
  text-align: center;
  ${font.$D3};
`;

// export const Gradient = styled.div<GradientProps>`
//   width: 200%;
//   color: transparent;
//   &:after {
//     content: '${(props) => props.text}';
//     top: 0;
//     left: 0;
//     z-index: -1;
//     color: ${theme.black};
//     text-shadow:
//       10px 10px 10px rgba(68, 188, 255, 0.5),
//       10px 10px 10px rgba(68, 176, 255, 0.5),
//       15px 15px 15px rgba(255, 68, 236, 0.5),
//       20px 20px 20px rgba(255, 103, 94, 0.5);
//   }
// `;

export const Button = styled(Link)`
  cursor: pointer;
`;
