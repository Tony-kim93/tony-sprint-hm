import React, { useState } from 'react';
import Heading from '../../components/atoms/Heading';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import * as S from '../../styles/globalStyles';
import Img from '../../components/atoms/Img';
import axios from '../../libraries/axios/index';

export default function Register() {
  const [image, setImage] = useState<any>([]);
  const [createObjectURL, setCreateObjectURL] = useState<any>(null);
  const [data, setData] = useState<any>('');

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
    const response = await axios
      .post('/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => setData(res.data));
  };
  const handleDelete = () => {
    axios.delete(`/images/${data.id}`);
  };

  return (
    <S.RegisterWrapper>
      <Heading text="등록페이지" />
      <Img src={createObjectURL} alt="test" width={100} height={100} />
      <Input
        accept="image/*"
        handleChange={handleChange}
        type="file"
        placeholder="regist img"
      />
      <Button name="upload" onClick={handleUpload} />
      <Button name="delete" onClick={handleDelete} />
    </S.RegisterWrapper>
  );
}
