import styled from "styled-components";

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70px;
  background-color: white;
  border-bottom: 1px solid #d8d8d8ff;
  z-index: 1000;
`;

export const Container = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;

export const Menus = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

export const MenuItem = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    color: #202020ff;
    background-color: #f8f9fa;
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:focus {
    outline: 2px solid #202020ff;
    outline-offset: 2px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #202020ff;
    transition: all 0.2s ease;
    transform: translateX(-50%);
  }
  
  &:hover::after {
    width: 80%;
  }
`;

export const StartSyncBox = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #6D60BA;
  border-radius: 8px;
  padding: 12px 24px;
  text-decoration-line: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
  }

  &:active {
    background-color: #555;
  }
`;
export const StartSyncText = styled.span`
  color: #ededed;
  font-size: 15px;
  font-weight: 400;
`;
