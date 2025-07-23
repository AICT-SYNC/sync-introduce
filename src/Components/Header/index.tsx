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
          <S.MenuItem onClick={() => navigate("/download")}>다운로드</S.MenuItem>
        </S.Menus>
        <S.StartSyncBox href="https://www.sync-saas.com" target="_self">
          <S.StartSyncText>Sync 무료로 사용하기</S.StartSyncText>
        </S.StartSyncBox>
      </S.Container>
    </S.Wrap>
  );
};

export default Header;
