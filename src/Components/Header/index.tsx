import * as S from "./style";
import bigLogo from "../../Assets/icons/bigLogo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Wrap>
      <S.Container>
        <S.Logo src={bigLogo} alt="Logo" onClick={() => navigate("/")} />
        <S.Menus>
          <S.MenuItem onClick={() => navigate("/")}>제품 소개</S.MenuItem>
          <S.MenuItem onClick={() => navigate("/desktop")}>데스크톱</S.MenuItem>
          <S.MenuItem onClick={() => navigate("/download")}>베타테스트 신청하기</S.MenuItem>
        </S.Menus>
        <S.StartSyncBox onClick={() => navigate("/waitinglist")}>
          <S.StartSyncText>베타테스트 신청</S.StartSyncText>
        </S.StartSyncBox>
      </S.Container>
    </S.Wrap>
  );
};

export default Header;
