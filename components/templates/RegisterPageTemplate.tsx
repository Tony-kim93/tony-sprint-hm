import React, { useEffect, useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Img from '../atoms/Img';
import axios from '../../libraries/axios/index';
import * as S from '../../styles/globalStyles';
import Header from '../organisms/Header';

export default function RegisterPageTemplate() {
  const [image, setImage] = useState<any>([]);
  const [createObjectURL, setCreateObjectURL] = useState<any>(null);
  const [progress, setProgress] = useState<any>(0);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setCreateObjectURL(fileUrl);
    setImage(file);
  };

  const handleUpload = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    formData.append('sub_id', '1234');
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent: any) => {
        const { loaded, total } = progressEvent;
        let percent = Math.round((loaded * 100) / total);
        setProgress(percent);
        console.log(`loaded:${loaded} total:${total} percent:${percent}`);
      }
    };
    axios
      .post('/images/upload', formData, options)
      .then((res) => console.log(res));
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
