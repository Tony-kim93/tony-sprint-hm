import React, { useState, useEffect, MouseEvent } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Img from '../atoms/Img';
import * as S from '../../styles/globalStyles';
import * as API from '../../api/index';
import * as TYPE from '../../interface/index';
import Header from '../organisms/Header';
import firebase from '../../firebase/firebase';

interface registerProps {
  token: string;
}

export default function RegisterPageTemplate({ token }: registerProps) {
  const [image, setImage] = useState<any>([]);
  const [createObjectURL, setCreateObjectURL] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      setCreateObjectURL(fileUrl);
      setImage(file);
    }
  };

  const handleUpload = (e: MouseEvent) => {
    e.preventDefault();
    const formData = new FormData();
    const messaging = firebase.messaging();
    formData.append('file', image);
    formData.append('sub_id', '1234');
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent: any) => {
        console.log(progressEvent);
        const { loaded, total } = progressEvent;
        let percent = Math.round((loaded * 100) / total);
        setProgress(percent);
      }
    };
    API.postImgUpload(formData, options)
      .then((res) => {
        if (res.status === 201) {
          messaging.onMessage((payload: TYPE.firebasePayload) => {
            alert(payload.notification.title);
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <S.RegisterWrapper>
      <Header />
      <Img type="previewImg" src={createObjectURL} alt="test" />
      <Input accept="image/*" handleChange={handleChange} type="file" />
      <Button name="upload" onClick={handleUpload} />
      <progress max="100" value={progress} />
      {progress}%
    </S.RegisterWrapper>
  );
}
