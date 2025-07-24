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
    max-width: 1600px;
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;
`;

export const ContentSection = styled.section`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px); // Header 높이 고려
  padding: 80px 0;


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 0;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MainTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.1;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Highlight = styled.span`
  color: #6D60BA;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
  max-width: 520px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #333;
  }
  
  &:active {
    background: #0d0d0d;
  }
`;

export const ButtonText = styled.span`
  color: inherit;
`;

export const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
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

// Remove unused styles
export const FirstSection = styled.section``;
export const TitleBox = styled.div``;
export const DownloadBtnBox = styled.div``;
export const DownloadBtnTex = styled.span``;
export const ImgBox = styled.div``;
export const Title = styled.h1``;
