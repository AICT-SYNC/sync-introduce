import styled from "styled-components";

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
  max-width: 1200px;
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ContentSection = styled.section<{ reversed?: boolean; $centered?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: calc(100vh - 70px); // Header 높이 고려
  padding: 80px 0;
  ${(props) => props.reversed && "grid-template-areas: 'image text';"}
  ${(props) => props.$centered && "grid-template-columns: 1fr; text-align: center; justify-items: center;"}


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 0;
    ${(props) => props.reversed && "grid-template-areas: unset;"} /* 모바일에서는 순서 원복 */
    ${(props) => props.$centered && "text-align: center;"}
  }
`;

export const TextContent = styled.div<{ $centered?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${(props) => props.$centered && "align-items: center;"}

  ${(props) => props.reversed && "grid-area: text;"} /* 이미지/텍스트 순서 변경용 */

  @media (max-width: 768px) {
    ${(props) => props.$centered && "align-items: center;"}
  }
`;

export const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

export const SectionTitle = styled.h2<{ $centered?: boolean }>`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.02em;
  ${(props) => props.$centered && "text-align: center; margin-bottom: 40px;"}

  @media (max-width: 768px) {
    font-size: 1.8rem;
    ${(props) => props.$centered && "margin-bottom: 30px;"}
  }
`;

export const Highlight = styled.span`
  color: #0066ff;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
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
  display: flex;
  align-items: center;
  justify-content: center; /* 버튼 텍스트 중앙 정렬 */
  gap: 8px;
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px; /* 버튼 최소 너비 설정 */

  &:hover {
    background: #333;
  }

  &:active {
    background: #0d0d0d;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px; /* 모바일에서 버튼 너무 커지는 것 방지 */
  }
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
  max-width: 1200px;
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
  /* Max-height를 늘려 기능 카드 내 이미지를 더 크게 보이게 합니다. */
  max-height: 280px; // 이전 200px -> 280px로 증가
  object-fit: contain; // 이미지가 잘리지 않고 컨테이너에 맞게 스케일
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
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
`;