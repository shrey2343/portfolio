import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BMWLoader from './components/BMWLoader';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  console.log('App loading state:', loading);

  return (
    <Router>
      {loading && <BMWLoader onFinish={() => {
        console.log('Loader finished, setting loading to false');
        setLoading(false);
      }} />}
      {!loading && (
        <div className="min-h-screen bg-black">
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.main>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;