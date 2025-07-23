import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '/bigLogo.svg';

const Header = () => {
  return (
    <Navbar style={{ background: '#fff', borderRadius: '0 0 var(--border-radius) var(--border-radius)', boxShadow: '0 2px 8px rgba(124,58,237,0.08)' }} expand="lg" sticky="top" variant="light">
      <Container>
        <Navbar.Brand style={{ color: '#22223b', fontWeight: 700, letterSpacing: '1px' }}>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Sync logo"
            style={{ filter: 'drop-shadow(0 2px 8px var(--main-purple-light))' }}
          />{' '}
          Sync
        </Navbar.Brand>
        {/* 메뉴바 제거 */}
      </Container>
    </Navbar>
  );
};

export default Header;
