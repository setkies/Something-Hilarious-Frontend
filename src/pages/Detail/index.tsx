import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import * as S from './style';
import theme from 'styles/theme';
import useModal from 'hooks/useModal';
import FundingModal from 'components/FundingModal';
import { useEffect, useState } from 'react';
import { instance } from 'apis';
import { useRecoilValue } from 'recoil';
import userStore from 'store/user.store';
import Dots from 'assets/svgs/Dots';
import EditProjectModal from 'components/EditProjectModal';
import DeleteProjcetModal from 'components/DeleteProjectModal';
import FundingHistoryModal from 'components/FundingHistoryModal';

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
  const [detail, setDetail] = useState<DetailState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const user = useRecoilValue(userStore);
  const [isAuthor, setIsAuthor] = useState<boolean>(true);
  const [isTrue, setIsTure] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      instance
        .get(`project/${id}`)
        .then((response) => {
          setDetail(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
          setError('프로젝트를 불러오는 중 오류가 발생했습니다.');
        });
    }
  }, [id]);

  useEffect(() => {
    if (detail && user) {
      setIsAuthor(detail.author.id === user.id);
    }
  }, [detail, user]);

  const modalOpen = () => {
    openModal({
      component: <FundingModal closeModal={closeModal} id={id} />,
    });
  };

  if (error) {
    return (
      <S.Container>
        <Header />
        <S.Contents>{error}</S.Contents>
      </S.Container>
    );
  }

  if (!detail) {
    return (
      <S.Container>
        <Header />
        <S.Contents>프로젝트 정보를 불러오는 중입니다...</S.Contents>
      </S.Container>
    );
  }

  const fundraising = detail.targetFund
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const EditProject = () => {
    openModal({
      component: <EditProjectModal closeModal={closeModal} id={id} />,
    });
  };

  const DeleteProject = () => {
    openModal({
      component: <DeleteProjcetModal closeModal={closeModal} id={id} />,
    });
  };

  const FundingHistory = () => {
    openModal({
      component: <FundingHistoryModal closeModal={closeModal} id={id} />,
    });
  };

  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.Thumbnail src={detail.thumbnail} alt={`${detail.name}의 썸네일`} />
        <S.Wrapper>
          <S.Flex>
            <S.Title>{detail.name}</S.Title>
            {isAuthor ? (
              <>
                <Dots onClick={() => setIsTure((prev) => !prev)} />
                {isTrue ? (
                  <S.DropdownContainer>
                    <S.Options>
                      <S.Option onClick={EditProject}>수정</S.Option>
                      <S.Option onClick={DeleteProject}>삭제</S.Option>
                    </S.Options>
                  </S.DropdownContainer>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </S.Flex>
          <div>
            <S.Description>{detail.summary}</S.Description>
            <S.Progresses>
              <S.Progress>펀딩 대기중</S.Progress>
              <S.Progress style={{ color: theme.black }}>
                (목표 펀딩 금액: {fundraising}원)
              </S.Progress>
            </S.Progresses>
          </div>
          <div>
            <S.Horizon />
            {isAuthor ? (
              <S.Button onClick={modalOpen}>지금 펀딩하기</S.Button>
            ) : (
              <S.Button onClick={FundingHistory}>펀딩 내역 보기</S.Button>
            )}
          </div>
        </S.Wrapper>
      </S.Contents>
      <S.Explanation>
        <S.DescriptionImg
          src={detail.introduceUrl}
          alt={`${detail.name}의 상세 설명`}
        />
      </S.Explanation>
    </S.Container>
  );
};

export default Detail;
