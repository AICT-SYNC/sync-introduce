import * as S from "./style";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

// 이미지 임포트 (예시: 실제 사용할 이미지 경로로 변경 필요)
import mainHeroImage from "../../assets/images/introducePage.png";
import problemSolutionImage from "../../assets/images/sync-problem-solution.png";
import aiFeatureImage1 from "../../assets/images/sync-ai-erd.png";
import aiFeatureImage2 from "../../assets/images/sync-ai-requirements.png";
import collaborationFeatureImage1 from "../../assets/images/sync-problem-solution.png";

const Product = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <S.Wrap>
        {/* 히어로 섹션 */}
        <S.Container>
          <S.ContentSection>
            <S.TextContent>
              <S.MainTitle>
                AI로 기술 격차를 허물다.<S.Highlight> Sync</S.Highlight>, 당신의
                프로젝트 성공 파트너
              </S.MainTitle>
              <S.Description>
                Sync는 AI 기반 프로젝트 관리 SaaS로, 기획부터 개발까지 모든
                팀원이 원활하게 소통하고 협력하도록 돕습니다.
              </S.Description>
              <S.ButtonGroup>
                <S.PrimaryButton>
                  <a href="https://www.sync-saas.com" target="_self" style={{textDecoration: "none", color: "#ededed"}}>
                    <S.ButtonText>Sync 무료로 사용하기</S.ButtonText>
                  </a>
                </S.PrimaryButton>
                <S.SecondaryButton onClick={() => navigate("/download")}>
                  <S.ButtonText>다운로드</S.ButtonText>
                </S.SecondaryButton>
              </S.ButtonGroup>
            </S.TextContent>
            <S.ImageContent>
              <S.ImageContainer>
                <S.MainImg src={mainHeroImage} alt="Sync 메인 화면" />
              </S.ImageContainer>
            </S.ImageContent>
          </S.ContentSection>
        </S.Container>

        {/* 문제점 및 해결책 섹션 */}
        <S.Container>
          <S.ContentSection>
           <S.TextContent>
              <S.SectionTitle>협업의 단절, Sync가 끝냅니다.</S.SectionTitle>
              <S.Description>
                현업에서 비개발자와 개발자 간의 소통은 필수적이지만, 기술 격차로
                인해 잦은 오해와 시간 낭비가 발생합니다. Sync는 이러한 단절을
                해결하기 위해 탄생했습니다.
              </S.Description>
              <S.Description>
                비개발자는 AI의 도움을 받아 자신의 의도를 정확하게 전달하고,
                개발자는 요구사항을 명확히 이해하여 실시간으로 협업할 수
                있습니다.
              </S.Description>
              <S.ButtonGroup>
                <S.PrimaryButton>
                  <a href="https://www.sync-saas.com" target="_self" style={{textDecoration: "none", color: "#ededed"}}>
                    <S.ButtonText>Sync 무료로 사용하기</S.ButtonText>
                  </a>
                </S.PrimaryButton>
                <S.SecondaryButton onClick={() => navigate("/download")}>
                  <S.ButtonText>다운로드</S.ButtonText>
                </S.SecondaryButton>
              </S.ButtonGroup>
            </S.TextContent>
            <S.ImageContent>
              <S.ImageContainer>
                <S.MainImg src={problemSolutionImage} alt="협업 문제 해결" />
              </S.ImageContainer>
            </S.ImageContent>
          </S.ContentSection>
        </S.Container>

        {/* 주요 AI 기능 섹션 */}
        <S.FeatureSection>
          <S.Container>
            <S.SectionTitle $centered={true}>
              Sync의 강력한 AI 기능
            </S.SectionTitle>
            <S.FeatureGrid>
              <S.FeatureCard>
                <S.FeatureImage src={aiFeatureImage1} alt="ERD 자동 생성" />
                <S.FeatureTitle>기능명세서 기반 ERD 자동 생성</S.FeatureTitle>
                <S.FeatureDescription>
                  작성한 기능명세서를 바탕으로 AI가 데이터베이스 ERD를 자동으로
                  생성합니다. 개발 지식이 없어도 완벽한 설계도를 만드세요.
                </S.FeatureDescription>
              </S.FeatureCard>
              <S.FeatureCard>
                <S.FeatureImage
                  src={aiFeatureImage2}
                  alt="요구사항 감지 및 추천"
                />
                <S.FeatureTitle>
                  부족한 요구사항 감지 & 구체적 요구사항 추천
                </S.FeatureTitle>
                <S.FeatureDescription>
                  AI가 요구사항을 분석하여 모호하거나 누락된 부분을 찾아내고, 더
                  구체적인 방향을 제안해 프로젝트의 완성도를 높입니다.
                </S.FeatureDescription>
              </S.FeatureCard>
              <S.FeatureCard>
                <S.FeatureImage
                  src={collaborationFeatureImage1}
                  alt="AI 충돌 감지"
                />
                <S.FeatureTitle>AI 충돌 감지 & 용어 번역</S.FeatureTitle>
                <S.FeatureDescription>
                  기능 간 잠재적 충돌을 미리 감지하고 경고하며, 드래그 한 번으로
                  전문 개발 용어를 쉽게 번역하여 소통의 장벽을 허뭅니다.
                </S.FeatureDescription>
              </S.FeatureCard>
            </S.FeatureGrid>
          </S.Container>
        </S.FeatureSection>

        {/* 핵심 협업 기능 섹션 */}
        <S.FeatureSection>
          <S.Container>
            <S.SectionTitle $centered={true}>
              효율적인 프로젝트 관리를 위한 핵심 기능
            </S.SectionTitle>
            <S.FeatureGrid>
              <S.FeatureCard>
                <S.FeatureTitle>워크스페이스 기반 팀 협업</S.FeatureTitle>
                <S.FeatureDescription>
                  각 프로젝트를 독립된 워크스페이스에서 관리하고, 팀원들을
                  손쉽게 초대하여 유기적인 협업 환경을 조성하세요.
                </S.FeatureDescription>
              </S.FeatureCard>
              <S.FeatureCard>
                <S.FeatureTitle>
                  직관적인 이슈 트래킹 & 칸반 보드
                </S.FeatureTitle>
                <S.FeatureDescription>
                  이슈 생성, 상태 관리, 담당자 지정은 물론, 드래그 & 드롭으로
                  프로젝트 진행 상황을 한눈에 파악할 수 있습니다.
                </S.FeatureDescription>
              </S.FeatureCard>
              <S.FeatureCard>
                <S.FeatureTitle>기술 명세서 관리 & 대시보드</S.FeatureTitle>
                <S.FeatureDescription>
                  ERD 외 기술 명세서도 체계적으로 관리하고, 대시보드를 통해
                  프로젝트 진행률과 팀의 성과를 시각적으로 분석하세요.
                </S.FeatureDescription>
              </S.FeatureCard>
            </S.FeatureGrid>
          </S.Container>
        </S.FeatureSection>

        {/* 마지막 CTA 섹션 */}
        <S.Container>
          <S.ContentSection $centered={true}>
            <S.TextContent $centered={true}>
              <S.SectionTitle>지금 바로 Sync를 경험해보세요!</S.SectionTitle>
              <S.Description>
                Sync와 함께라면 비개발자와 개발자의 완벽한 시너지를 통해
                프로젝트 성공에 한 발 더 다가설 수 있습니다.
              </S.Description>
              <S.ButtonGroup>
                <S.PrimaryButton onClick={() => navigate("/download")}>
                  <S.ButtonText>Sync 무료로 시작하기</S.ButtonText>
                </S.PrimaryButton>
              </S.ButtonGroup>
            </S.TextContent>
          </S.ContentSection>
        </S.Container>
      </S.Wrap>
      <Footer />
    </>
  );
};

export default Product;
