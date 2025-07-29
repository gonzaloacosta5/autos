import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        Sobre Nosotros
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        En AutoVenta, no solo vendemos coches; vendemos sueños, aventuras y la libertad de la carretera. Nos dedicamos a conectar a las personas con el vehículo perfecto que se adapte a su estilo de vida y presupuesto.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div
          className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Nuestra Misión</h3>
          <p className="text-gray-700">
            Facilitar la compra y venta de vehículos, ofreciendo una experiencia transparente, segura y agradable para todos nuestros usuarios.
          </p>
        </motion.div>
        <motion.div
          className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Nuestros Valores</h3>
          <p className="text-gray-700">
            Integridad, innovación y un servicio al cliente excepcional son los pilares de todo lo que hacemos.
          </p>
        </motion.div>
        <motion.div
          className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Nuestra Visión</h3>
          <p className="text-gray-700">
            Ser la plataforma líder en la venta de vehículos, reconocida por nuestra confianza y la satisfacción de nuestros clientes.
          </p>
        </motion.div>
      </div>

      <motion.p
        className="text-lg text-gray-700 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        ¡Gracias por elegir AutoVenta! Estamos emocionados de ayudarte a encontrar el coche de tus sueños.
      </motion.p>
    </motion.div>
  );
};

export default AboutPage;