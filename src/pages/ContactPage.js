import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus('Por favor, completa todos los campos.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setStatus('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    emailjs.send(
      'service_apfk5pd',         // Tu Service ID
      'template_jty7ebh',        // Tu Template ID
      {
        from_name: name,
        email: email,
        message: message
      },
      'lt6KlwKj08FWwMkt0'        // Tu Public Key
    ).then(
      (response) => {
        console.log('Correo enviado', response);
        setStatus('¡Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('Error al enviar el correo', error);
        setStatus('Ocurrió un error al enviar el mensaje. Intenta nuevamente.');
      }
    );
  };

  return (
    <motion.div className="container mx-auto px-4 py-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <motion.h2 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}>
        Contáctanos
      </motion.h2>
      <motion.p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
        ¿Tienes alguna pregunta, sugerencia o simplemente quieres charlar sobre coches? ¡Estamos aquí para ayudarte!
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none" placeholder="Tu nombre" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none" placeholder="tu@ejemplo.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Tu Mensaje</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" className="w-full px-5 py-3 border border-gray-300 rounded-xl resize-y" placeholder="Escribe tu mensaje aquí..." required />
            </div>
            <motion.button type="submit" className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Send className="w-5 h-5" />
              Enviar Mensaje
            </motion.button>
            {status && <p className="text-center text-sm text-blue-700 mt-2">{status}</p>}
          </form>
        </motion.div>

        {/* Columna derecha: Información de contacto */}
        <motion.div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg flex flex-col justify-center" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-semibold">Correo Electrónico:</p>
                <a href="mailto:info@centralautomotores.com.ar" className="text-blue-600 hover:underline">info@centralautomotores.com.ar</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-semibold">Teléfono:</p>
                <a href="tel:+541136683489" className="text-blue-600 hover:underline">+54 11 3668-3489</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-semibold">Dirección:</p>
                <p className="text-gray-700">Rio Gallegos 259 - Quilmes, Argentina</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
