import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Hero />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
