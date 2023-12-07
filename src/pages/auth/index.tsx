import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { customAxios } from '../../apis';

const Auth = () => {
  const [searchParam] = useSearchParams();
  useEffect(() => {
    (async () => {
      const code = searchParam.get('code');
      if (code) {
        try {
          const { accessToken, refreshToken } = (
            await customAxios.post('/auth/google', { code })
          ).data;
          console.log(accessToken, refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
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
