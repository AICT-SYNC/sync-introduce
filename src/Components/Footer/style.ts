import styled from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  min-height: 200px;
  background-color: #f8f9fa;
  border-top: 1px solid #d8d8d8ff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0 20px;
`;

export const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 250px;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const BrandText = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  max-width: 300px;
`;

export const LinksSection = styled.div`
  display: flex;
  gap: 60px;
  flex: 2;
  
  @media (max-width: 768px) {
    gap: 40px;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 120px;
`;

export const ColumnTitle = styled.h4`
  color: #202020ff;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

export const LinkItem = styled.a`
  color: #666;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  padding: 2px 0;
  transition: color 0.2s ease;
  border: none;
  background: none;
  text-align: left;
  
  &:hover {
    color: #202020ff;
  }
  
  &:focus {
    outline: 2px solid #202020ff;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid #e9ecef;
  flex-wrap: wrap;
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
`;

export const Copyright = styled.p`
  color: #999;
  font-size: 13px;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const SocialLink = styled.a`
  color: #666;
  font-size: 13px;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #202020ff;
  }
  
  &:focus {
    outline: 2px solid #202020ff;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
