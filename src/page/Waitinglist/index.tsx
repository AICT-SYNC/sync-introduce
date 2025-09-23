import React, { useState } from 'react';
import * as S from "./style";
import Header from '../../Components/Header';
import {  toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonSize, ButtonVariant } from 'sync-design-system';

const WaitingList = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const navigate = useNavigate();

  const notify = () => toast.success('신청이 완료 됐습니다!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
  const notifyError = () => toast.error('오류가 발생했습니다. 다시 시도해주세요!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL as string;

      const discordMessage = {
        embeds: [{
          title: "🎯 새로운 Sync 베타테스트 신청",
          color: 0x5865F2,
          fields: [
            {
              name: "📧 이메일",
              value: formData.email,
              inline: true
            },
            {
              name: "📋 제목",
              value: formData.subject,
              inline: true
            },
            {
              name: "💬 메시지",
              value: formData.message,
              inline: false
            }
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Sync 베타테스트 신청"
          }
        }]
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage)
      });

      if (response.ok) {
        notify();
        setFormData({ email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }

      navigate('/');
    } catch (error) {
      console.error('Error sending Discord message:', error);
      notifyError();
    }
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
              <Button
                  variant={ButtonVariant.PRIMARY}
                  size={ButtonSize.XL}
                  text={"베타테스트 신청"}
                  type="submit"
                />
            </S.FormContainer>
          </S.ContentSection>
        </S.Container>
      </S.Wrap>
      
    </>

  );
};

export default WaitingList;
