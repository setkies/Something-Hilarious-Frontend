import { instance } from 'apis';
import React, { ReactNode, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import userStore from 'store/user.store';

interface Props {
  children: ReactNode;
}

const AuthWrapper = ({ children }: Props) => {
  const setUser = useSetRecoilState(userStore);
  useEffect(() => {
    (async () => {
      const { userData } = (await instance.get('/user')).data;
      setUser(userData);
    })();
  }, []);
  return <>{children}</>;
};

export default AuthWrapper;
