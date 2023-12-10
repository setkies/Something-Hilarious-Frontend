import React, { useState } from 'react';
import CloseIcon from 'assets/svgs/Close';
import * as S from './style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { instance } from 'apis';

interface GenerateModalProps {
  closeModal: () => void;
}

interface RegistrationState {
  name: string;
  summary: string;
  thumbnail: string;
  introduceUrl: string;
  targetFund: number;
  fundEndTime: string;
}

const Registration = ({ closeModal }: GenerateModalProps) => {
  const [tab, setTab] = useState<boolean>(true);
  const [registrationData, setRegistrationData] = useState<RegistrationState>({
    name: '',
    summary: '',
    thumbnail: '',
    introduceUrl: '',
    targetFund: 1000,
    fundEndTime: '',
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
      const imageUrl = URL.createObjectURL(file);
      setRegistrationData({ ...registrationData, [field]: imageUrl });

      const formData = new FormData();
      formData.append('image', file);

      const blob = new Blob(
        [
          JSON.stringify({
            name: file.name,
            type: file.type,
            size: file.size,
          }),
        ],
        {
          type: 'application/json',
        },
      );

      formData.append('data', blob);
      setRegistrationData({ ...registrationData, [field]: formData });
    }
  };

  const handleRegistration = async () => {
    const isEmpty = Object.values(registrationData).some((value) => !value);
    if (isEmpty) {
      toast.warn('모든 필드를 채워주세요.');
      return;
    }

    console.log('Registration Data:', registrationData);
    await instance.post('/project', registrationData);
    closeModal();
    toast.success('프로젝트가 성공적으로 등록되었습니다.');
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
            value={registrationData.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
          <S.Body>프로젝트 설명</S.Body>
          <S.TextArea
            placeholder='프로젝트에 대한 설명을 입력해주세요.'
            value={registrationData.summary}
            onChange={(e) => handleInputChange(e, 'summary')}
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
                  {registrationData.introduceUrl ? (
                    <S.InputImage src={registrationData.introduceUrl} />
                  ) : (
                    '파일 선택하기'
                  )}
                </S.ImageLabel>
                <input
                  type='file'
                  id='file2'
                  onChange={(e) => handleFileChange(e, 'introduceUrl')}
                  style={{ display: 'none' }}
                />
              </S.UploadImage>
            </div>
          </S.Flex>
          <S.Body>목표 펀딩 금액</S.Body>
          <S.Input
            type='number'
            min='1000'
            placeholder='목표 펀딩 금액을 입력해주세요. (최소 1,000원)'
            value={registrationData.targetFund}
            onChange={(e) => handleInputChange(e, 'targetFund')}
            style={{ marginBottom: '20px' }}
          />
          <S.Body>펀딩 종료 시간</S.Body>
          <S.Input
            type='datetime-local'
            placeholder='펀딩 종료 시간을 입력해주세요.'
            value={registrationData.fundEndTime}
            onChange={(e) => handleInputChange(e, 'fundEndTime')}
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
