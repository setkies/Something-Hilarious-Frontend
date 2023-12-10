import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import * as S from './style';
import dummyData from 'fixtures/funding.dummy';
import theme from 'styles/theme';
import useModal from 'hooks/useModal';
import FundingModal from 'components/FundingModal';
import { useEffect, useState } from 'react';
import { instance } from 'apis';

interface AuthorType {
  id: number;
  name: string;
  email: string;
  profileImage: string;
}

interface DetailState {
  name: string;
  summary: string;
  thumbnail: string;
  introduceUrl: string;
  status: 'PENDING' | 'PROCESS' | 'END';
  targetFund: number;
  fundEndTime: string;
  author: AuthorType;
}

const Detail = () => {
  const { openModal, closeModal } = useModal();
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<DetailState>({
    name: '',
    summary: '',
    thumbnail: '',
    introduceUrl: '',
    status: 'PENDING',
    targetFund: 0,
    fundEndTime: '',
    author: {
      id: 0,
      name: '',
      email: '',
      profileImage: '',
    },
  });

  useEffect(() => {
    instance.get(`project/${id}`).then((response) => {
      setDetail(response.data);
      console.log(response.data);
    });
  }, []);

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
        {/* <S.Explanation>
          <S.DescriptionImg src={testImg} />
        </S.Explanation> */}
      </S.Contents>
    </S.Container>
  );
};

export default Detail;
