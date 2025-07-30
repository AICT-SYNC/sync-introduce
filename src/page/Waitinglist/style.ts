import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 40px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }

  @media (max-width: 480px) {
    padding: 60px 16px;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
`;

export const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1a1a1a;
  background-color: #ffffff;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6D60BA;
    box-shadow: 0 0 0 3px rgba(109, 96, 186, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1a1a1a;
  background-color: #ffffff;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6D60BA;
    box-shadow: 0 0 0 3px rgba(109, 96, 186, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 32px;
  background-color: #6D60BA;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover {
    background-color: #5d4fa3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;