import { Container } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-2 my-0" style={{ background: '#fff', color: 'var(--main-purple-dark)', borderTop: '1px solid #e5e5e5' }}>
      <Container>
        <p className="text-center text-muted" style={{ color: 'var(--main-purple-dark)', fontWeight: 500, margin: 0 }}>
          © {year} Sync, Inc. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
