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

export const ContentSection = styled.section`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px);
  padding: 80px 0;

  @media (max-width: 1200px) {
    gap: 40px;
    padding: 60px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    padding: 40px 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    gap: 24px;
    padding: 32px 0;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  max-width: 580px;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
  }
`;

export const MainTitle = styled.h1`
  font: ${Font.title.title_bold1};
  color: ${({theme})=>theme["text-black"]};
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Highlight = styled.span`
  color: #6D60BA;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
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
  color: none;
  border: none;
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
  flex: 1;
  max-width: 900px;

  @media (max-width: 768px) {
    max-width: 100%;
    order: -1;
  }
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

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

// Remove unused styles
export const FirstSection = styled.section``;
export const TitleBox = styled.div``;
export const DownloadBtnBox = styled.div``;
export const DownloadBtnTex = styled.span``;
export const ImgBox = styled.div``;
export const Title = styled.h1``;
