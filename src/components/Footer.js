import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CarFront } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          <CarFront className="w-7 h-7 text-blue-400" />
          <span className="text-2xl font-bold text-white">AutoVenta</span>
        </div>

        {/* Navegación */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/" className="text-gray-400 hover:text-white transition duration-200">
            Inicio
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition duration-200">
            Nosotros
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition duration-200">
            Contacto
          </Link>
          <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition duration-200">
            Política de Privacidad
          </Link>
        </nav>

        {/* Derechos */}
        <p className="text-gray-500 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} AutoVenta. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
