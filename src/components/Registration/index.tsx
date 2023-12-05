import CloseIcon from 'assets/svgs/Close';
import * as S from './style';
import { useState } from 'react';

interface GenerateModalProps {
  closeModal: () => void;
}

const Registration = ({ closeModal }: GenerateModalProps) => {
  const [tab, setTab] = useState(true);
  return (
    <S.Container>
      <S.Wrapper>
        <div />
        <S.Title>프로젝트 등록하기</S.Title>
        <CloseIcon onClick={closeModal} />
      </S.Wrapper>
      {tab ? (
        <S.ModalContents>
          <S.Body>프로젝트 이름</S.Body>
          <S.Input placeholder='이름 입력해주세요.' />
          <S.Body>프로젝트 설명</S.Body>
          <S.TextArea />
          <S.Wrapper>
            <div />
            <div />
            <S.Button onClick={() => setTab((prev) => !prev)}>
              다음으로
            </S.Button>
          </S.Wrapper>
        </S.ModalContents>
      ) : (
        <S.ModalContents>
          <S.Button onClick={() => setTab((prev) => !prev)}>이전으로</S.Button>
        </S.ModalContents>
      )}
    </S.Container>
  );
};

export default Registration;
