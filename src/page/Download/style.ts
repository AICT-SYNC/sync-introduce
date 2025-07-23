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
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 70px);
  padding: 100px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 600px;
`;

export const Badge = styled.span`
  display: inline-block;
  background: #f8f8f8;
  color: #666;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  width: fit-content;
  border: 1px solid #e6e6e6;
`;

export const MainTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 16px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 200px;
  justify-content: center;
  
  &:hover {
    background: #333;
  }
  
  &:active {
    background: #0d0d0d;
  }
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: #666;
  border: 1px solid #e6e6e6;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f8f8f8;
    border-color: #d0d0d0;
  }
`;

export const ButtonText = styled.span`
  color: inherit;
`;

export const PlatformIcon = styled.img`
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
`;

export const SystemRequirements = styled.div`
  margin-top: 48px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  text-align: left;
  width: 100%;
  max-width: 500px;
`;

export const RequirementTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 12px 0;
`;

export const RequirementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RequirementItem = styled.li`
  font-size: 14px;
  color: #666;
  position: relative;
  padding-left: 16px;
  
  &::before {
    content: '•';
    color: #1a1a1a;
    position: absolute;
    left: 0;
  }
`;