feedback

# csr vs ssr => ok

---

# 중간 리팩토링(6/12~6/13)

- 변수명수정
- import 정렬

## [피드백]

순위별로

- API단 분리
- 데이터 마이그레이션
- 인피니트 스크롤 커스텀훅스로

# 최종 리팩토링(?)

//오늘한거
아토믹 디자인 UI단 정리(organism까지 정리) => 데이터 정갈하게 넣어주기(재사용가능하게)

인피닛스크롤 커스텀훅

api단 정리
import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Img from '../atoms/Img';
import axios from '../../libraries/axios/index';
import \* as S from '../../styles/globalStyles';
import Header from '../organisms/Header';

export default function RegisterPageTemplate() {
const [image, setImage] = useState<any>([]);
const [createObjectURL, setCreateObjectURL] = useState<any>(null);
const [test, setTest] = useState<any>(0);

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

    let config = {
      headers:{},
      onUploadProgress: (progressEvent: any) => {
        let percentCompleted = Math.round(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        console.log('percentCompleted', percentCompleted);
        if (percentCompleted < 100) {
          setTest(percentCompleted);
        }
        console.log('config????', test);
      }
    };

    await axios.post('/images/upload', formData, config).then((res) => {
      console.log(res);
      setTest(100);
      setTimeout(() => {
        console.log('aaaaaaaa');
      }, 100);
    });

};
console.log(test);

return (
<S.RegisterWrapper>
<Header />
<Img type="previewImg" src={createObjectURL} alt="test" />
<Input accept="image/*" handleChange={handleChange} type="file" />
<Button name="upload" onClick={handleUpload} />
<div>
<progress max="100" value={test}>
{test}%
</progress>
</div>
{test}%
</S.RegisterWrapper>
);
}
