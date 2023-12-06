import CloseIcon from 'assets/svgs/Close';
import * as S from './style';
import { useState } from 'react';

interface GenerateModalProps {
  closeModal: () => void;
}

const Registration = ({ closeModal }: GenerateModalProps) => {
  const [tab, setTab] = useState<boolean>(true);
  const [selectedThumbnale, setselectedThumbnale] = useState<string>('');
  const [selectedImage, setselectedImage] = useState<string>('');

  const handleThumbnaleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setselectedThumbnale(file.name);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setselectedImage(file.name);
    }
  };

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
          <S.TextArea placeholder='프로젝트에 대한 설명을 입력해주세요.' />
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
          <S.Body>썸네일 업로드</S.Body>
          <S.UploadImage>
            <S.ImageLabel htmlFor='file1'>
              {selectedThumbnale || '파일 선택하기'}
            </S.ImageLabel>
            <input
              type='file'
              id='file1'
              onChange={handleThumbnaleChange}
              style={{ display: 'none' }}
            />
          </S.UploadImage>
          <S.Body>썸네일 업로드</S.Body>
          <S.UploadImage>
            <S.ImageLabel htmlFor='file2'>
              {selectedImage || '파일 선택하기'}
            </S.ImageLabel>
            <input
              type='file'
              id='file2'
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </S.UploadImage>
          <S.Button onClick={() => setTab((prev) => !prev)}>이전으로</S.Button>
        </S.ModalContents>
      )}
    </S.Container>
  );
};

export default Registration;
