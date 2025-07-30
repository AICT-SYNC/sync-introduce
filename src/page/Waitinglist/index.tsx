import React, { useState } from 'react';
import * as S from "./style";
import Header from '../../Components/Header';

const WaitingList = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Header />
    <S.Wrap>
      <S.Container>
        <S.ContentSection>
          <S.MainTitle>Sync 베타테스트 신청</S.MainTitle>
          <S.Description>
            Sync 를 먼저 사용해보고 싶으신가요? <br />아래 폼에 정보를 입력해주시면, 저희가 연락드리겠습니다.
          </S.Description>
          
          <S.FormContainer onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label htmlFor="email">이메일 주소</S.Label>
              <S.Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your-email@example.com"
              />
            </S.FormGroup>
            
            <S.FormGroup>
              <S.Label htmlFor="subject">제목</S.Label>
              <S.Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="제목을 입력하세요"
              />
            </S.FormGroup>
            
            <S.FormGroup>
              <S.Label htmlFor="message">본문</S.Label>
              <S.TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="메시지를 입력하세요"
                rows={5}
              />
            </S.FormGroup>
            
            <S.SubmitButton type="submit">
              등록하기
            </S.SubmitButton>
          </S.FormContainer>
        </S.ContentSection>
      </S.Container>
    </S.Wrap>
    </>
    
  );
};

export default WaitingList;
