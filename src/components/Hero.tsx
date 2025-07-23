import { Row, Col, Button } from 'react-bootstrap';
import logo from '/bigLogo.svg';

const Hero = () => {
  return (
    <div
      className="hero-section"
      style={{
        width: '100%',
        background: 'linear-gradient(120deg, #3E328C 0%, #5D50AD 60%, #a78bfa 100%)',
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '64px 0 0 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: '1.5rem' }}>
          <img
            src={logo}
            alt="Sync logo"
            style={{ width: 56, height: 56, filter: 'drop-shadow(0 2px 8px #a78bfa33)' }}
          />
          <span style={{
            color: '#fff',
            fontWeight: 900,
            fontSize: '3.5rem',
            letterSpacing: '-1px',
            fontFamily: 'Inter, Pretendard, Segoe UI, Arial, sans-serif',
            textShadow: '0 2px 8px rgba(34,34,59,0.18), 0 1px 0 #5D50AD'
          }}>
            Sync
          </span>
        </div>
        <p className="lead text-muted" style={{
          color: '#fff',
          fontWeight: 500,
          textShadow: '0 1px 4px rgba(34,34,59,0.18), 0 1px 0 #3E328C'
        }}>
          비개발자와 개발자간의 협업을 위한 AI 기반 프로젝트 관리 SaaS.<br />
          Sync와 함께 아이디어를 현실로 만드세요.
        </p>
        <p>
          <Button variant="light" className="mx-1" style={{
            color: '#5D50AD',
            fontWeight: 700,
            border: 'none',
            boxShadow: '0 2px 8px rgba(61,50,140,0.10)',
            background: '#fff',
            borderRadius: 8
          }}>
            Windows 다운로드
          </Button>
          <Button variant="outline-light" className="mx-1" style={{
            color: '#fff',
            borderColor: '#a78bfa',
            fontWeight: 700,
            background: 'transparent',
            borderRadius: 8
          }}>
            macOS 다운로드
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
