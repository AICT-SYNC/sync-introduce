import * as S from "./style";
import bigLogo from "../../Assets/bigLogo.svg";

const Header = () => {
  return (
    <S.Wrap>
      <S.Container>
        <S.Logo src={bigLogo} alt="" />
        <p>Headr입니다</p>
      </S.Container>
    </S.Wrap>
  );
};

export default Header;
