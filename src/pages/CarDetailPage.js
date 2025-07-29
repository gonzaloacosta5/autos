import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { defaultCars } from '../mock/cars';
import { ArrowLeft, Car, Gauge, DollarSign, Palette, CheckCircle } from 'lucide-react';

const CarDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = defaultCars.find((c) => c.id === id);

  const handleBuyClick = () => {
    if (car) {
      const phoneNumber = '5491136683489'; // Tu número de WhatsApp con código de país
      const message = `¡Hola! Estoy interesado en el ${car.name} (${car.year}) que vi en AutoVenta. Su precio es de $${car.price.toLocaleString()}. ¿Podrías darme más información?`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  if (!car) {
    return (
      <motion.div
        className="container mx-auto px-4 py-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-red-600 mb-4">¡Ups! Coche no encontrado.</h2>
        <p className="text-gray-700 text-lg mb-8">Parece que este modelo se fue volando.</p>
        <motion.button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al catálogo
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
        whileHover={{ x: -5 }}
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </motion.button>

      <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-xl flex flex-col lg:flex-row gap-8">
        <motion.div
          className="lg:w-1/2 rounded-2xl overflow-hidden shadow-md"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <motion.h1
              className="text-4xl font-extrabold text-gray-900 mb-3"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {car.name} ({car.year})
            </motion.h1>
            <motion.p
              className="text-gray-600 text-lg mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {car.description}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <motion.div
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Gauge className="w-6 h-6 text-blue-500" />
                <span className="text-gray-800 font-semibold">Kilometraje: {car.mileage.toLocaleString()} km</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <Palette className="w-6 h-6 text-blue-500" />
                <span className="text-gray-800 font-semibold">Color: {car.color}</span>
              </motion.div>
            </div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Características Destacadas:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-between pt-6 border-t border-gray-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <span className="text-5xl font-extrabold text-blue-600">
              ${car.price.toLocaleString()}
            </span>
            <motion.button
              onClick={handleBuyClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ¡Comprar Ahora!
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarDetailPage;