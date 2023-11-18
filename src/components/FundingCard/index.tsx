import * as React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface FundingCardProps {
  data: { title: string; description: string; id: number };
}

const FundingCard: React.FC<FundingCardProps> = ({ data }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${data.id}`);
  };

  return (
    <S.Container onClick={goToDetail}>
      <S.ImageContainer>
        <S.Image />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Title>{data.title}</S.Title>
        <S.Description>{data.description}</S.Description>
      </S.InfoContainer>
    </S.Container>
  );
};

export default FundingCard;
