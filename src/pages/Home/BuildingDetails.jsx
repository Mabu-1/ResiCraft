// BuildingDetails.jsx
import React from 'react';
import { GiSlicedBread, GiCoffeeCup, GiWifiRouter, GiBed, GiBathtub } from 'react-icons/gi';

const BuildingDetails = () => {
  const features = [
    { icon: <GiSlicedBread size={90} className="text-blue-500" />, text: 'Modern Kitchen' },
    { icon: <GiCoffeeCup size={90} className="text-blue-500" />, text: 'Cafeteria' },
    { icon: <GiWifiRouter size={90} className="text-blue-500" />, text: 'High-Speed Internet' },
    { icon: <GiBed size={90} className="text-blue-500" />, text: 'Spacious Bedrooms' },
    { icon: <GiBathtub size={90} className="text-blue-500" />, text: 'Luxurious Bathrooms' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-extrabold mb-4">About <span className='text-blue-700'>ResiCraft</span> </h2>
        <p className="text-xl text-gray-700">
          Discover a place where luxury meets comfort, and modern architecture blends seamlessly with
          nature. Our building is designed to provide you with an unparalleled living experience,
          offering spacious interiors, breathtaking views, and a range of amenities for your
          convenience.
        </p>

        <div className="flex flex-wrap justify-center mt-8 space-x-6 ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {feature.icon}
              <p className="mt-2 text-2xl text-black font-bold">{feature.text}</p>
            </div>
          ))}
        
        </div>
        <div className="flex flex-wrap justify-center mt-8 space-x-6 ">
            <p className="mt-2 text-3xl text-black font-bold">And Many More...</p>
            </div>
      </div>
    </section>
  );
};

export default BuildingDetails;
