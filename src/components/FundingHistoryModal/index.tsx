import CloseIcon from 'assets/svgs/Close';
import * as S from './style';

interface GenerateModalProps {
  closeModal: () => void;
  id?: string;
}

const FundingHistoryModal = ({ closeModal, id }: GenerateModalProps) => {
  return (
    <S.Container>
      <S.ModalTop>
        <div />
        <CloseIcon onClick={closeModal} />
      </S.ModalTop>
      <S.Value>asf</S.Value>
      <S.Value></S.Value>
    </S.Container>
  );
};

export default FundingHistoryModal;
