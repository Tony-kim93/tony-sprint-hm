import React, { useEffect, useState } from 'react';
import Paragraph from '../../components/atoms/Paragraph';
import * as S from '../../styles/globalStyles';
import Header from '../../components/organisms/Header';
import * as API from '../../api/index';
import ProfilePageTemplate from '../../components/templates/ProfilePageTemplate';

export default function Profile() {
  const [userAgent, setUserAgent] = useState<string>('');
  const [userIp, setUserIp] = useState<string>('');
  useEffect(() => {
    if (process.browser) {
      setUserAgent(navigator.userAgent);
    }
    fetch(API.IP)
      .then((response) => response.json())
      .then((result) => setUserIp(result.ip));
  }, []);

  return (
    <S.ProfileWrapper>
      <Header />
      <Paragraph text={`userAgent: ${userAgent}`} />
      <Paragraph text={`userIp: ${userIp}`} />
      <ProfilePageTemplate />
    </S.ProfileWrapper>
  );
}
