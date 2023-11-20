import CloseIcon from 'assets/svgs/Close';
import * as S from './style';
import Logo from 'assets/svgs/Logo';

interface GenerateModalProps {
  closeModal: () => void;
}

const FundingModal = ({ closeModal }: GenerateModalProps) => {
  return (
    <S.Container>
      <S.ModalTop>
        <div />
        <Logo />
        <CloseIcon onClick={closeModal} />
      </S.ModalTop>
      <S.Wrapper>
        <S.Description>차정원 님의 프로젝트의 힘이 되어보세요!</S.Description>
        <S.Description>펀딩 금액을 입력해주세요.</S.Description>
      </S.Wrapper>
      <S.Wrapper>
        <S.Input
          placeholder='-원 (최소펀딩금액: 1000원)'
          type='number'
          min={1000}
        />
        <S.Button>지금 펀딩하기</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default FundingModal;
