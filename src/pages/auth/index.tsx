import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { instance } from 'apis';

const Auth = () => {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const code = searchParam.get('code');
      // console.log(code);
      if (code) {
        try {
          const { data } = await instance.post('/auth/google', { code });
          console.log(data);
          if (data) {
            console.log(data.accessToken, data.refreshToken);
            localStorage.setItem('accessToken', data.accessToken);
            // console.log(localStorage.getItem('accessToken'));
            // eslint-disable-next-line
            // debugger;
            localStorage.setItem('refreshToken', data.refreshToken);
            // console.log(localStorage.getItem('refreshToken'));
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
