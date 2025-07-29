import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        <motion.main
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/car/:id" element={<CarDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            {/* Aquí podrías añadir más rutas, como una página 404 */}
            <Route path="*" element={
              <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-4xl font-bold text-red-600 mb-4">¡Error 404!</h2>
                <p className="text-gray-700 text-lg">Página no encontrada. ¿Te perdiste en la carretera?</p>
              </div>
            } />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;