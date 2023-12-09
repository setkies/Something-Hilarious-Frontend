import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { instance } from 'apis';

const Auth = () => {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const code = searchParam.get('code');
      if (code) {
        try {
          const { data } = await instance.post('/auth/google', { code });
          console.log(data);
          if (data) {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
          }
        } catch (e) {
          console.log(e);
        }
        navigate('/');
      }
    })();
  }, [searchParam]);
  return <div></div>;
};

export default Auth;
