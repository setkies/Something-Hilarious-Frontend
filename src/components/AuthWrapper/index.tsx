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
    try {
      (async () => {
        const { data } = await instance.get('/user');
        if (data) {
          setUser(data);
        }
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return <>{children}</>;
};

export default AuthWrapper;
