import CloseIcon from 'assets/svgs/Close';
import * as S from './style';
import theme from 'styles/theme';
import { instance } from 'apis';
import { toast } from 'react-toastify';

interface GenerateModalProps {
  closeModal: () => void;
  id?: string;
}

const DeleteProjcetModal = ({ closeModal, id }: GenerateModalProps) => {
  const DeleteProject = () => {
    instance.delete(`/project/${id}`);
    toast.success('삭제가 완료되었습니다.');
  };
  return (
    <S.Container>
      <S.ModalTop>
        <div />
        <CloseIcon onClick={closeModal} />
      </S.ModalTop>
      <S.Description>정말 프로젝트를 삭제하시겠습니까?</S.Description>
      <S.Wrapper>
        <S.Button style={{ background: theme.grey[500] }} onClick={closeModal}>
          아니요
        </S.Button>
        <S.Button onClick={DeleteProject}>삭제하기</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default DeleteProjcetModal;
