import React from 'react';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';
import { defaultCars } from '../mock/cars';

const HomePage = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        Encuentra tu próximo sueño sobre ruedas
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {defaultCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </motion.div>
  );
};

export default HomePage;