import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Gauge, DollarSign, Palette } from 'lucide-react';

const CarCard = ({ car }) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Link to={`/car/${car.id}`} className="block">
        <div className="relative h-48 w-full mb-4 rounded-2xl overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {car.year}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{car.description}</p>
        <div className="grid grid-cols-2 gap-3 text-gray-700 text-sm font-medium mb-4">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-blue-500" />
            <span>{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-blue-500" />
            <span>{car.color}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-3xl font-extrabold text-blue-600">
            ${car.price.toLocaleString()}
          </span>
          <motion.button
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Detalles
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
};

export default CarCard;