/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import SignIn from '@/components/Auth/signIn';

const AuthPage = () => {
  useEffect(() => {
    console.log('AuthPage');
  }, []);

  return (
    <>
      <SignIn />
    </>
  );
};

export default AuthPage;
