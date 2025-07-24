import * as S from "./style";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer"
import appleLogo from "../../Assets/icons/appleLogo.svg"
import windowLogo from "../../Assets/icons/windowLogo.svg"

const Download = () => {
  
  const handleDownload = (platform: 'mac' | 'windows') => {
    
    const downloadUrls = {
      mac: '/downloads/Sync Desktop-1.0.0-arm64.dmg',
      windows: '/sync-introduce/downloads/sync-windows.exe'
    };
    
    const link = document.createElement('a');
    link.href = downloadUrls[platform];
    link.download = '';
    
    if (platform === "mac") {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("준비중입니다.");
    }
  };

  return (
    <>
      <Header />
      <S.Wrap>
        <S.Container>
          <S.ContentSection>
            <S.TextContent>
              <S.MainTitle>데스크톱용 Sync 다운로드</S.MainTitle>
              <S.Description>
                더 빠르고 더 집중적인 경험이 기다립니다. 
                데스크톱에서 Sync의 모든 기능을 자유롭게 활용하세요.
              </S.Description>
              <S.ButtonGroup>
                <S.PrimaryButton onClick={() => handleDownload('mac')}>
                  <S.PlatformIcon src={appleLogo} alt="Apple" />
                  <S.ButtonText>macOS용 다운로드</S.ButtonText>
                </S.PrimaryButton>
                <S.PrimaryButton onClick={() => handleDownload('windows')}>
                  <S.PlatformIcon src={windowLogo} alt="Windows" />
                  <S.ButtonText>Windows용 다운로드</S.ButtonText>
                </S.PrimaryButton>
              </S.ButtonGroup>
            </S.TextContent>
          </S.ContentSection>
        </S.Container>
        <Footer />
      </S.Wrap>
    </>
  );
};

export default Download;
