import React, { useState } from 'react';
import CloseIcon from 'assets/svgs/Close';
import * as S from './style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface GenerateModalProps {
  closeModal: () => void;
}

interface RegistrationState {
  projectName: string;
  projectDescription: string;
  thumbnail: string;
  additionalImage: string;
  fundingGoal: number;
}

const Registration = ({ closeModal }: GenerateModalProps) => {
  const [tab, setTab] = useState<boolean>(true);
  const [registrationData, setRegistrationData] = useState<RegistrationState>({
    projectName: '',
    projectDescription: '',
    thumbnail: '',
    additionalImage: '',
    fundingGoal: 1000,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof RegistrationState,
  ) => {
    setRegistrationData({ ...registrationData, [field]: event.target.value });
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof RegistrationState,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setRegistrationData({ ...registrationData, [field]: fileUrl });
    }
  };

  const handleRegistration = () => {
    const isEmpty = Object.values(registrationData).some((value) => !value);
    if (isEmpty) {
      toast.warn('모든 필드를 채워주세요.', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    console.log('Registration Data:', registrationData);
    closeModal();
    toast.success('프로젝트가 성공적으로 등록되었습니다.', {
      position: toast.POSITION.TOP_CENTER,
    });
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
          <S.Input
            placeholder='이름 입력해주세요.'
            value={registrationData.projectName}
            onChange={(e) => handleInputChange(e, 'projectName')}
          />
          <S.Body>프로젝트 설명</S.Body>
          <S.TextArea
            placeholder='프로젝트에 대한 설명을 입력해주세요.'
            value={registrationData.projectDescription}
            onChange={(e) => handleInputChange(e, 'projectDescription')}
          />
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
          <S.Flex>
            <div>
              <S.Body>썸네일 업로드</S.Body>
              <S.UploadImage>
                <S.Body style={{ background: 'none', cursor: 'pointer' }}>
                  프로젝트 썸네일을 업로드해주세요.
                </S.Body>
                <S.ImageLabel htmlFor='file1'>
                  {registrationData.thumbnail ? (
                    <S.InputImage src={registrationData.thumbnail} />
                  ) : (
                    <h1>파일 선택하기</h1>
                  )}
                </S.ImageLabel>
                <input
                  type='file'
                  id='file1'
                  onChange={(e) => handleFileChange(e, 'thumbnail')}
                  style={{ display: 'none' }}
                />
              </S.UploadImage>
            </div>
            <div>
              <S.Body>추가 사진</S.Body>
              <S.UploadImage>
                <S.Body style={{ background: 'none', cursor: 'pointer' }}>
                  추가로 이미지를 업로드해주세요.
                </S.Body>
                <S.ImageLabel htmlFor='file2'>
                  {registrationData.additionalImage ? (
                    <S.InputImage src={registrationData.additionalImage} />
                  ) : (
                    '파일 선택하기'
                  )}
                </S.ImageLabel>
                <input
                  type='file'
                  id='file2'
                  onChange={(e) => handleFileChange(e, 'additionalImage')}
                  style={{ display: 'none' }}
                />
              </S.UploadImage>
            </div>
          </S.Flex>
          <S.Body style={{ marginTop: '30px' }}>목표 펀딩 금액</S.Body>
          <S.Input
            type='number'
            min='1000'
            placeholder='목표 펀딩 금액을 입력해주세요. (최소 1,000원)'
            value={registrationData.fundingGoal}
            onChange={(e) => handleInputChange(e, 'fundingGoal')}
            style={{ marginBottom: '100px' }}
          />
          <S.Wrapper>
            <S.Button onClick={() => setTab((prev) => !prev)}>
              이전으로
            </S.Button>
            <div />
            <S.Button onClick={handleRegistration}>등록하기</S.Button>
          </S.Wrapper>
        </S.ModalContents>
      )}
    </S.Container>
  );
};

export default Registration;
