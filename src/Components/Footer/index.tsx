import * as S from "./style";
import logo from "../../Assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <S.Wrap>
      <S.Container>
        <S.TopSection>
          <S.BrandSection>
            <S.Logo src={logo} alt="Sync Logo" onClick={() => navigate("/")} />
            <S.BrandText>Sync는 팀 협업을 위한 최고의 솔루션입니다.</S.BrandText>
          </S.BrandSection>
          
          <S.LinksSection>
            <S.LinkColumn>
              <S.ColumnTitle>제품</S.ColumnTitle>
              <S.LinkItem href="/product" onClick={() => navigate("/product")}>제품 소개</S.LinkItem>
              <S.LinkItem href="/waitinglist" onClick={() => navigate("/waitinglist")}>Sync 베타테스트 신청</S.LinkItem>
            </S.LinkColumn>
            
            <S.LinkColumn>
              <S.ColumnTitle>지원</S.ColumnTitle>
              <S.LinkItem href="notify@sync-saas.com">고객 지원</S.LinkItem>
              <S.LinkItem href="notify@sync-saas.com">문의하기</S.LinkItem>
              {/* <S.LinkItem href="/help">도움말</S.LinkItem> */}
            </S.LinkColumn>
            
            {/* <S.LinkColumn>
              <S.ColumnTitle>회사</S.ColumnTitle>
              <S.LinkItem href="/about">회사 소개</S.LinkItem>
              <S.LinkItem href="/privacy">개인정보처리방침</S.LinkItem>
              <S.LinkItem href="/terms">이용약관</S.LinkItem>
            </S.LinkColumn> */}
          </S.LinksSection>
        </S.TopSection>
        
        <S.BottomSection>
          <S.Copyright>© 2025 Sync. All rights reserved.</S.Copyright>
          <S.SocialLinks>
            <S.SocialLink href="https://github.com/AICT-SYNC" target="_blank">GitHub</S.SocialLink>
            <S.SocialLink href="notify@sync-saas.com">Email</S.SocialLink>
          </S.SocialLinks>
        </S.BottomSection>
      </S.Container>
    </S.Wrap>
  );
};

export default Footer;
