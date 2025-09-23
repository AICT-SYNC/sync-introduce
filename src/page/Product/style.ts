import styled from "styled-components";
import { Font } from "sync-design-system";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;
  background: #ffffff;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const ContentSection = styled.section<{
  reversed?: boolean;
  $centered?: boolean;
}>`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px);
  padding: 80px 0;
  ${(props) => props.reversed && "flex-direction: row-reverse;"}
  ${(props) => props.$centered && "flex-direction: column; text-align: center;"}

  @media (max-width: 1200px) {
    gap: 40px;
    padding: 60px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    padding: 40px 0;
    text-align: center;
    ${(props) => props.reversed && "flex-direction: column;"}
  }

  @media (max-width: 480px) {
    gap: 24px;
    padding: 32px 0;
  }
`;

export const TextContent = styled.div<{ $centered?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  max-width: 580px;
  ${(props) => props.$centered && "align-items: center; text-align: center;"}

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
  }
`;

export const MainTitle = styled.h1`
  font: ${Font.title.title_bold1};
  color: ${({ theme }) => theme["text-black"]};
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const SectionTitle = styled.h2<{ $centered?: boolean }>`
  font: ${Font.title.title_bold1};
  color: ${({ theme }) => theme["text-black"]};
  margin: 0;
  ${(props) => props.$centered && "text-align: center; margin-bottom: 40px;"}

  @media (max-width: 768px) {
    font-size: 1.8rem;
    ${(props) => props.$centered && "margin-bottom: 30px;"}
  }
`;

export const Highlight = styled.span`
  color: #3f328c;
  font-weight: 700;
`;

export const Description = styled.p`
  font: ${Font.body.body3_Regular};
  color: ${({ theme }) => theme["text-muted"]};
  margin: 0;
  max-width: 580px; /* 텍스트 블록의 가독성을 위해 넓이 조정 */

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const PrimaryButton = styled.button`
  color: white;
  border: none;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: white;
  color: #1a1a1a;
  border: 1px solid #e0e0e0;

  &:hover {
    background: #f0f0f0;
  }
  &:active {
    background: #e0e0e0;
  }
`;

export const ButtonText = styled.span`
  color: inherit;
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`;

export const MainImg = styled.img`
  max-width: 900px;
  height: auto;
  display: block;
  border-radius: 12px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// --- 새로운 섹션 및 기능 카드 스타일 추가 ---

export const FeatureSection = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: #f9f9f9; /* 배경색으로 섹션 구분 */
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;

  &:nth-of-type(even) {
    background-color: #ffffff;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 40px;
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: contain;
  margin-bottom: 15px;
  border-radius: 8px;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`;

export const FeatureDescription = styled.p`
  font: ${Font.body.body3_Regular};
  color: ${({ theme }) => theme["text-muted"]};
  margin: 0;
`;
