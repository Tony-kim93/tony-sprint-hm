import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Img from '../atoms/Img';
import axios from '../../libraries/axios/index';
import * as S from '../../styles/globalStyles';
import Header from '../organisms/Header';

export default function RegisterPageTemplate() {
  const [image, setImage] = useState<any>([]);
  const [createObjectURL, setCreateObjectURL] = useState<any>(null);

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setCreateObjectURL(fileUrl);
    setImage(file);
  };
  const handleUpload = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    formData.append('sub_id', '1234');
    await axios.post('/images/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };
  return (
    <S.RegisterWrapper>
      <Header />
      <Img type="previewImg" src={createObjectURL} alt="test" />
      <Input accept="image/*" handleChange={handleChange} type="file" />
      <Button name="upload" onClick={handleUpload} />
    </S.RegisterWrapper>
  );
}
