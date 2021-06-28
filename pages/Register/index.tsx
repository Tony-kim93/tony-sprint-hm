import React, { useEffect, useState } from 'react';
import localforage from 'localforage';
import enableMessaging from '../../hooks/fcmMessage';
import RegisterPageTemplate from '../../components/templates/RegisterPageTemplate';

export default function Register() {
  const [token, setToken] = useState<string>('');
  useEffect(() => {
    enableMessaging();
    localforage
      .getItem('fcm_token')
      .then((result: any) => setToken(result))
      .catch((error) => console.log(error));
  }, []);
  console.log(token);
  return (
    <>
      <RegisterPageTemplate token={token} />
    </>
  );
}
