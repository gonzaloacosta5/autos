import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CarFront, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 py-4 shadow-sm relative z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo y título */}
        <Link to="/" className="flex items-center gap-3">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            <CarFront className="w-8 h-8 text-blue-600" />
          </motion.div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Central Automotores
          </h1>
        </Link>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>

        {/* Menú en PC */}
        <nav className="hidden md:flex">
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
            <li>
              <Link
                to="/privacy-policy"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
