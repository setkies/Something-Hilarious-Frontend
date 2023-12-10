import * as React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface FundingCardProps {
  data: {
    name: string;
    summary: string;
    id: number;
    thumbnail: string;
  };
}

const FundingCard: React.FC<FundingCardProps> = ({ data }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${data.id}`);
  };

  return (
    <S.Container onClick={goToDetail}>
      <S.ImageContainer>
        <S.Image src={data.thumbnail} alt={data.thumbnail} />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Title>{data.name}</S.Title>
        <S.Description>{data.summary}</S.Description>
      </S.InfoContainer>
    </S.Container>
  );
};

export default FundingCard;
