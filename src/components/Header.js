import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CarFront } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 py-4 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          >
            <CarFront className="w-8 h-8 text-blue-600" />
          </motion.div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AutoVenta
          </h1>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link
                to="/"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;