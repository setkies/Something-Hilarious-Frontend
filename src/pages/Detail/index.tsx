import * as React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import * as S from './style';
import dummyData from 'fixtures/funding.dummy';
import theme from 'styles/theme';
import useModal from 'hooks/useModal';
import FundingModal from 'components/FundingModal';

const Detail: React.FC = () => {
  const { openModal, closeModal } = useModal();
  const { id } = useParams<{ id: string }>();

  const modalOpen = () => {
    openModal({
      component: <FundingModal closeModal={closeModal} />,
    });
  };

  if (!id) {
    return (
      <S.Container>
        <Header />
        <S.Contents>그런 프로젝트는 없습니다!</S.Contents>
      </S.Container>
    );
  }

  const fundingId = parseInt(id, 10);
  const selectedData = dummyData.find((data) => data.id === fundingId);

  if (!selectedData) {
    return (
      <S.Container>
        <Header />
        <S.Contents>그런 프로젝트는 없습니다!</S.Contents>
      </S.Container>
    );
  }

  const fundraising = selectedData.fundraising
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.Thumbnail />
        <S.Wrapper>
          <S.Title>{selectedData.title}</S.Title>
          <div>
            <S.Description>{selectedData.description}</S.Description>
            <S.Progresses>
              <S.Progress>{selectedData.people}명 참가중</S.Progress>
              <S.Progress style={{ color: theme.black }}>
                ({fundraising}원)
              </S.Progress>
            </S.Progresses>
          </div>
          <div>
            <S.Horizon />
            <S.Button onClick={modalOpen}>지금 펀딩하기</S.Button>
          </div>
        </S.Wrapper>
      </S.Contents>
    </S.Container>
  );
};

export default Detail;
