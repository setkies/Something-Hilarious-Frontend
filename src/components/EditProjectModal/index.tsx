import React, { useRef, useState, useEffect } from 'react';
import CloseIcon from 'assets/svgs/Close';
import * as S from './style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { instance } from 'apis';
import axios from 'axios';
import styled from 'styled-components';

interface GenerateModalProps {
  closeModal: () => void;
  id?: string;
}

interface RegistrationState {
  name: string;
  summary: string;
  thumbnail: string;
  introduceUrl: string;
  targetFund: number;
  fundEndTime: string;
}

const EditProjectModal = ({ closeModal, id }: GenerateModalProps) => {
  const [tab, setTab] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [registrationData, setRegistrationData] = useState<RegistrationState>({
    name: '',
    summary: '',
    thumbnail: '',
    introduceUrl: '',
    targetFund: 1000,
    fundEndTime: '',
  });

  useEffect(() => {
    if (id) {
      instance
        .get(`/project/${id}`)
        .then((response) => {
          setRegistrationData(response.data);
        })
        .catch((error) => {
          console.error('Error loading project data:', error);
          toast.error('프로젝트 데이터를 불러오는 데 실패했습니다.');
        });
    }
  }, [id]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof RegistrationState,
  ) => {
    setRegistrationData({ ...registrationData, [field]: event.target.value });
  };

  const updateImageData = (field: keyof RegistrationState, data: string) => {
    setRegistrationData((prevData) => ({ ...prevData, [field]: data }));
  };

  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      const res = await axios.post(
        'https://newbsm.team-insert.com/api/image/save',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      updateImageData('thumbnail', res.data);
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('이미지 업로드에 실패했습니다.');
    }
  };

  const onUploadThumbnail = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      const res = await axios.post(
        'https://newbsm.team-insert.com/api/image/save',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      updateImageData('introduceUrl', res.data);
    } catch (error) {
      console.error('Error uploading additional image:', error);
      toast.error('추가 이미지 업로드에 실패했습니다.');
    }
  };

  const handleRegistration = async () => {
    try {
      await instance.put(`/project/${id}`, registrationData);
      closeModal();
      toast.success('프로젝트가 성공적으로 수정되었습니다.');
    } catch (error) {
      console.error('Error updating project:', error);
      toast.error('프로젝트 수정 중 오류가 발생했습니다.');
    }
  };

  const onImageClick = () => {
    inputRef.current?.click();
  };

  return (
    <S.Container>
      <S.Wrapper>
        <div />
        <S.Title>프로젝트 수정하기</S.Title>
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
                <Button onClick={onImageClick}></Button>
                <label htmlFor='fileInput'>
                  <input
                    id='fileInput'
                    type='file'
                    accept='image/*'
                    ref={inputRef}
                    onChange={onUploadImage}
                    style={{ display: 'none' }}
                  />
                </label>
              </S.UploadImage>
            </div>
            <div>
              <S.Body>추가 사진</S.Body>
              <S.UploadImage>
                <S.Body style={{ background: 'none', cursor: 'pointer' }}>
                  추가 사진을 업로드해주세요.
                </S.Body>
                <S.ImageLabel htmlFor='file1'>
                  {registrationData.thumbnail ? (
                    <S.InputImage src={registrationData.introduceUrl} />
                  ) : (
                    <Button onClick={onImageClick}></Button>
                  )}
                </S.ImageLabel>
                <label htmlFor='fileInput'>
                  <input
                    id='fileInput'
                    type='file'
                    accept='image/*'
                    ref={inputRef}
                    onChange={onUploadThumbnail}
                    style={{ display: 'none' }}
                  />
                </label>
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

export default EditProjectModal;

const Button = styled.button`
  width: 200px;
  height: 200px;
  background-color: pink;
  z-index: 5;
`;
