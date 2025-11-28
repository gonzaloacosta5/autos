import car1Img1 from '../images/car1-1.webp';
import car1Img2 from '../images/car1-2.webp';
import car1Img3 from '../images/car1-3.webp';
import car2Img1 from '../images/car2-1.jpg';
import car2Img2 from '../images/car2-2.jpg';
import car2Img3 from '../images/car2-3.jpg';

export const defaultCars = [
  {
    id: 'car1',
    name: 'Peugeot Boxer 2.3 Hdi Confort 330m',
    year: 2014,
    price: 25500000,
    mileage: 15000,
    color: 'Midnight Silver Metallic',
    images: [car1Img1, car1Img2, car1Img3], // 👈 array de imágenes
    description: 'La Peugeot Boxer 2.3 HDi Confort 330m es una furgoneta robusta y confiable...',
    features: [
      'Motor diesel 2.3 HDi',
      'Capacidad de carga de hasta 1.5 toneladas',
      'Transmisión manual de 6 velocidades',
      'Aire acondicionado',
      'Sistema de frenos ABS'
    ]
  },
  {
    id: 'car2',
    name: 'Renault Fluence',
    year: 2011,
    price: 10500000,
    mileage: 120000,
    color: 'Gris Estrella',
    images: [car2Img1, car2Img2, car2Img3],
    description: 'El Renault Fluence 2011 es un sedán cómodo y espacioso...',
    features: [
      'Motor naftero 2.0L',
      'Transmisión manual de 6 velocidades',
      'Aire acondicionado automático',
      'Control de velocidad crucero',
      'Airbags frontales y laterales'
    ]
  }
];
