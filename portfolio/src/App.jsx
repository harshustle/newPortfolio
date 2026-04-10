import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundWrapper from './components/BackgroundWrapper';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import UGCVideos from './pages/UGCVideos';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Harsh from './pages/Harsh';
import Edit from './pages/Edit';
import AIProductShoot from './pages/AIProductShoot';

import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ugc-videos" element={<UGCVideos />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/harsh" element={<Harsh />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/ai-product-shoot" element={<AIProductShoot />} />
      </Routes>
    </AnimatePresence>
  );
}

function LayoutWrapper() {
  const location = useLocation();
  const isStandalone = location.pathname === '/harsh' || location.pathname === '/edit' || location.pathname === '/ai-product-shoot';

  return (
    <div className="app-container" style={isStandalone ? { backgroundColor: location.pathname === '/edit' ? '#f8f7f5' : '#0a0a0c', minHeight: '100vh' } : {}}>
      {!isStandalone && <BackgroundWrapper />}
      <Navbar /> {/* Keep the Navbar so you can navigate */}
      <main className="main-content" style={isStandalone ? { padding: 0 } : {}}>
        <AnimatedRoutes />
      </main>
      {!isStandalone && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
