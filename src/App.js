import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './component/about/AboutPage';
import OurEducator from './component/oureducator/OurEducator';

function App() {
  return (
    <Router> {/* Move the Router component here to wrap the whole app */}
      <div className="App">
        <Header /> {/* Header will now have access to routing context */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='our-educator' element={<OurEducator/>} />
        </Routes>
        <Footer /> {/* Footer will also have access to routing context */}
      </div>
    </Router>
  );
}

export default App;
