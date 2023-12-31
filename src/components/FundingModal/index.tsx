import React, { useState } from 'react';
import { toast } from 'react-toastify';
import CloseIcon from 'assets/svgs/Close';
import * as S from './style';
import Logo from 'assets/svgs/Logo';
import { useRecoilValue } from 'recoil';
import userStore from 'store/user.store';
import { instance } from 'apis';

interface GenerateModalProps {
  closeModal: () => void;
  id?: string;
}

interface FundingTypes {
  id: string;
  money: number;
}

const FundingModal = ({ closeModal, id }: GenerateModalProps) => {
  const [fundingAmount, setFundingAmount] = useState<number>(0);
  const user = useRecoilValue(userStore);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setFundingAmount(value);
    } else {
      setFundingAmount(0);
    }
  };

  const handleFunding = async () => {
    if (fundingAmount === 0) {
      toast.error('금액을 입력해주세요.');
      return;
    }

    const userMoney = user?.wallet?.money ?? 0;

    if (fundingAmount > userMoney) {
      toast.error('돈이 부족합니다.');
    } else {
      try {
        const projectId = id || 0;
        await instance.post('/funding', { projectId, money: fundingAmount });

        toast.success('펀딩이 완료되었습니다.');
      } catch (error) {
        console.error('Error while funding:', error);
        toast.error('펀딩 중 오류가 발생했습니다.');
      }
    }
  };

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
          value={fundingAmount === 0 ? '' : fundingAmount}
          onChange={handleInputChange}
        />
        <S.Button onClick={handleFunding}>지금 펀딩하기</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default FundingModal;
