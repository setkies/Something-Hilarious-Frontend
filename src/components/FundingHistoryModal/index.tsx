import React, { useEffect, useState } from 'react';
import CloseIcon from 'assets/svgs/Close';
import * as S from './style';
import { instance } from 'apis';

interface GenerateModalProps {
  closeModal: () => void;
  id?: string;
}

interface FundingHistoryItem {
  id: number;
  user: {
    id: number;
    name: string;
    email: string;
    authority: string;
    profileImage: string;
    wallet: {
      id: number;
      money: number;
    };
  };
  project: {
    id: number;
    name: string;
    summary: string;
    thumbnail: string;
    introduceUrl: string;
    status: 'PENDING' | 'PROCESS' | 'END';
    targetFund: number;
    fundEndTime: string;
    nowFund: number;
    author: {
      id: number;
      name: string;
      email: string;
      authority: string;
      profileImage: string;
      wallet: {
        id: number;
        money: number;
      };
    };
  };
  money: number;
}

const FundingHistoryModal = ({ closeModal, id }: GenerateModalProps) => {
  const [history, setHistory] = useState<FundingHistoryItem[]>([]);

  useEffect(() => {
    if (id) {
      instance.get(`/funding/project/${id}`).then((res) => {
        setHistory(res.data);
        console.log(res.data);
      });
    }
  }, [id]);

  return (
    <S.Container>
      <S.ModalTop>
        <div />
        <CloseIcon onClick={closeModal} />
      </S.ModalTop>
      <div>
        {history.map((item) => (
          <S.Value key={item.id}>
            <h1>사용자 이름: {item.user.name}</h1>
          </S.Value>
        ))}
      </div>
    </S.Container>
  );
};

export default FundingHistoryModal;
