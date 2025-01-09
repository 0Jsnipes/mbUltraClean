import { useState } from 'react';
import cleaningLady from '../assets/cleaningLady.png';
import { useNavigate } from 'react-router-dom';

function Services() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const sizes = [
    { label: '1 Bedroom', price: 100 },
    { label: '2 Bedrooms', price: 200 },
    { label: '3 Bedrooms', price: 300 },
    { label: '4 Bedrooms', price: 400 },
  ];

  const services = [
    { label: 'Deep Clean' },
    { label: 'One-Time' },
    { label: 'Reoccurring (10% Off for 6-Month Commitment)' },
  ];

  const handleSchedule = () => {
    if (selectedSize && selectedService) {
      navigate('/schedule');
    } else {
      alert('Please select a room size and a service type before scheduling.');
    }
  };

  return (
    <div className="bg-purple-gradient min-h-screen relative flex flex-col items-center justify-center p-10">
      {/* Background Image */}
      <div
        className="absolute top-[-100px] left-0 w-1/3 h-full bg-no-repeat bg-contain opacity-80 z-0"
        style={{ backgroundImage: `url(${cleaningLady})` }}
      ></div>

      <h2 className="text-5xl font-bold text-purple-900 mb-8 z-10">Our Services</h2>

      <p className="text-lg text-purple-600 mb-6 z-10">Explore the services we offer.</p>

      {/* Room Size Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 z-10">
        {sizes.map((size) => (
          <button
            key={size.label}
            onClick={() => setSelectedSize(size.label)}
            className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
              selectedSize === size.label
                ? 'bg-purple-700 text-white'
                : 'bg-white text-purple-700 hover:bg-purple-200'
            }`}
          >
            {size.label} - ${size.price}
          </button>
        ))}
      </div>

      {/* Service Type Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 z-10">
        {services.map((service) => (
          <button
            key={service.label}
            onClick={() => setSelectedService(service.label)}
            className={`px-8 py-3 rounded-lg font-semibold transition duration-300 ${
              selectedService === service.label
                ? 'bg-purple-700 text-white'
                : 'bg-white text-purple-700 hover:bg-purple-200'
            }`}
          >
            {service.label}
          </button>
        ))}
      </div>

      {/* Schedule Button */}
      <button
        onClick={handleSchedule}
        className="px-8 py-3 bg-purple-700 text-white font-bold rounded-lg shadow-lg hover:bg-purple-900 transition duration-300 z-10"
      >
        Schedule
      </button>

      {/* Display Selected Options */}
      <div className="mt-8 text-center z-10">
        {selectedSize && selectedService && (
          <p className="text-2xl font-semibold text-purple-900">
            Selected: {selectedSize} | {selectedService}
          </p>
        )}
      </div>
    </div>
  );
}

export default Services;
