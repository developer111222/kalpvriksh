import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import AboutPage from './component/about/AboutPage';
import OurEducator from './component/oureducator/OurEducator';
import Sport from './component/sport/Sport';
import LifeAtKalpvriksh from './component/lifeatkalpvriksh/LifeAtKalpvriksh';
import { useEffect } from 'react';
import OurCampus from './component/our-campus/OurCampus';

function App() {
  return (
    <Router> {/* Wrap the entire app inside Router */}
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-educator" element={<OurEducator />} />
        <Route path="/sport" element={<Sport />
        } />
        <Route path="/life-at-kalpvriksh" element={<LifeAtKalpvriksh />} />
        <Route path='/our-campus' element={<OurCampus/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
