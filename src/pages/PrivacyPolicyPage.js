import React from 'react';
import { motion } from 'framer-motion';

const policyItems = [
  {
    title: '1. Información que Recopilamos',
    content:
      'Podemos recopilar información como tu nombre, correo electrónico, número de teléfono, preferencias de vehículos y cualquier otra información proporcionada a través de formularios o navegación en nuestro sitio.',
  },
  {
    title: '2. Uso de la Información',
    content:
      'Utilizamos esta información para responder consultas, mejorar nuestros servicios, ofrecer contenido personalizado y enviarte novedades o promociones relevantes.',
  },
  {
    title: '3. Compartir Información',
    content:
      'No compartimos tu información con terceros salvo en casos necesarios para ofrecer nuestros servicios, cumplir obligaciones legales o con tu consentimiento explícito.',
  },
  {
    title: '4. Seguridad',
    content:
      'Aplicamos medidas de seguridad para proteger tus datos personales, aunque ningún sistema es completamente seguro.',
  },
  {
    title: '5. Tus Derechos',
    content:
      'Podés solicitarnos acceso, corrección o eliminación de tus datos en cualquier momento a través del formulario de contacto.',
  },
  {
    title: '6. Cambios a esta Política',
    content:
      'Nos reservamos el derecho de modificar esta política. Te recomendamos revisarla periódicamente para estar al tanto de cualquier cambio.',
  },
];

const PrivacyPolicyPage = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        Política de Privacidad
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        En AutoVenta, valoramos tu privacidad. Esta política detalla cómo recopilamos, utilizamos y protegemos tu información personal mientras navegás nuestro sitio o usás nuestros servicios.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {policyItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h2>
            <p className="text-gray-700 text-sm">{item.content}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-sm text-gray-600 text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Última actualización: 29 de julio de 2025.
      </motion.p>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
