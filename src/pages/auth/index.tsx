import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { instance } from '../../apis';
import userStore from 'store/user.store';
import { useSetRecoilState } from 'recoil';

const Auth = () => {
  const [searchParam] = useSearchParams();
  const setUser = useSetRecoilState(userStore);

  useEffect(() => {
    (async () => {
      const code = searchParam.get('code');
      if (code) {
        try {
          const { accessToken, refreshToken } = (
            await instance.post('/auth/google', { code })
          ).data;
          console.log(accessToken, refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          const { userData } = (await instance.get('/user')).data;
          setUser(userData);
        } catch (e) {
          console.log(e);
        }
        location.href = '/';
      }
    })();
  }, [searchParam]);

  return <div></div>;
};

export default Auth;
