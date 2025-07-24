import * as S from "./style";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer"
import IntroducePage from "../../Assets/images/introducePage.png";
import arrow from "../../Assets/icons/arrow_right.svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <S.Wrap>
        <S.Container>
          <S.ContentSection>
            <S.TextContent>
              <S.MainTitle>
                비개발자와 개발자간의 협업을 위한
                <S.Highlight> AI 기반</S.Highlight> 프로젝트 관리 SaaS
              </S.MainTitle>
              <S.Description>
                복잡한 개발 프로세스를 간단하게, AI가 도와주는 스마트한 협업
                환경에서 팀의 생산성을 극대화하세요.
              </S.Description>
              <S.ButtonGroup>
                <S.PrimaryButton>
                  <S.ButtonText onClick={() => navigate("/download")}>
                    Sync 다운로드
                  </S.ButtonText>
                  <S.ArrowIcon src={arrow} alt="" />
                </S.PrimaryButton>
              </S.ButtonGroup>
            </S.TextContent>
            <S.ImageContent>
              <S.ImageContainer>
                <S.MainImg
                  src={IntroducePage}
                  alt="Sync 프로젝트 관리 플랫폼"
                />
              </S.ImageContainer>
            </S.ImageContent>
          </S.ContentSection>
        </S.Container>
        <Footer />
      </S.Wrap>
    </>
  );
};

export default Main;
