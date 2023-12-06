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
      setselectedThumbnale(URL.createObjectURL(file));
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setselectedImage(URL.createObjectURL(file));
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
            <S.Body style={{ background: 'none', cursor: 'pointer' }}>
              프로젝트 썸네일을 업로드해주세요.
            </S.Body>
            <S.ImageLabel htmlFor='file1'>
              {<S.InputImage src={selectedThumbnale} /> || (
                <h1>파일 선택하기</h1>
              )}
            </S.ImageLabel>
            <input
              type='file'
              id='file1'
              onChange={handleThumbnaleChange}
              style={{ display: 'none' }}
            />
          </S.UploadImage>
          <S.Body>추가 사진</S.Body>
          <S.UploadImage>
            <S.Body style={{ background: 'none', cursor: 'pointer' }}>
              추가로 이미지를 업로드해주세요.
            </S.Body>
            <S.ImageLabel htmlFor='file2'>
              {<S.InputImage src={selectedImage} /> || '파일 선택하기'}
            </S.ImageLabel>
            <input
              type='file'
              id='file2'
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </S.UploadImage>
          <S.Wrapper>
            <S.Button onClick={() => setTab((prev) => !prev)}>
              이전으로
            </S.Button>
            <div />
            <S.Button>등록하기</S.Button>
          </S.Wrapper>
        </S.ModalContents>
      )}
    </S.Container>
  );
};

export default Registration;
