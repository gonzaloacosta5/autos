import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { defaultCars } from '../mock/cars';
import { ArrowLeft, Gauge, Palette, CheckCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';

const CarDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = defaultCars.find((c) => c.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? car.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === car.images.length - 1 ? 0 : prev + 1
    );
  };

  if (!car) return <h2>No encontrado</h2>;

  return (
    <motion.div className="container mx-auto max-w-screen-xl px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-blue-600 font-semibold"
      >
        <ArrowLeft className="w-5 h-5" /> Volver
      </button>

      <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col lg:flex-row gap-8">

        {/* Carrusel de imágenes */}
        <motion.div className="relative lg:w-1/2 rounded-2xl overflow-hidden shadow-md aspect-[4/3] sm:aspect-[16/9]">
          <img
            src={car.images[currentImageIndex]}
            alt={car.name}
            onClick={() => setIsLightboxOpen(true)}
            className="absolute inset-0 w-full h-full object-cover object-center cursor-zoom-in"
          />

          {/* Botón anterior */}
          <button
            onClick={handlePrevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Botón siguiente */}
          <button
            onClick={handleNextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Miniaturas */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {car.images.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  idx === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Información del auto */}
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-4xl font-extrabold mb-3">
            {car.name} ({car.year})
          </h1>
          <p className="text-gray-600 text-lg mb-6">{car.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
              <Gauge className="w-6 h-6 text-blue-500" />
              <span className="text-gray-800 font-semibold">
                Kilometraje: {car.mileage.toLocaleString()} km
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
              <Palette className="w-6 h-6 text-blue-500" />
              <span className="text-gray-800 font-semibold">Color: {car.color}</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Características Destacadas:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {car.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto pt-6 border-t border-gray-100">
            <span className="text-5xl font-extrabold text-blue-600">
              ${car.price.toLocaleString()}
            </span>
            <button
              onClick={() => {
                const phoneNumber = "5491136683489";
                const message = encodeURIComponent(
                  `¡Hola! Me interesa el ${car.name} (${car.year}) que vi en su página. ¿Podrían darme más información?`
                );
                window.open(
                  `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
                  "_blank"
                );
              }}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 w-full sm:w-auto"
            >
              Contactar asesor
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
            className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-white/20"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={car.images[currentImageIndex]}
            alt={car.name}
            className="max-w-full max-h-full object-contain cursor-zoom-in"
          />
        </div>
      )}
    </motion.div>
  );
};

export default CarDetailPage;