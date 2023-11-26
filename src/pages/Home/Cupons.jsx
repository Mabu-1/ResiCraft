// Coupons.jsx
import React from 'react';
import { FiPercent } from 'react-icons/fi';

const Coupons = () => {
  const coupons = [
    {
      code: 'SAVE20',
      discount: '20%',
      description: 'Get a 20% discount on your next booking with this exclusive coupon.',
    },
    {
      code: 'FALL25',
      discount: '25%',
      description: 'Fall into savings! Use this coupon to enjoy a 25% discount on your stay.',
    },
    {
      code: 'SPECIAL30',
      discount: '30%',
      description: 'Unlock special savings! Use this coupon code to get a 30% discount.',
    },
  ];

  return (
    <section className=" py-16 relative overflow-hidden">
      {/* Coupon Images/Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute bottom-0 left-0 p-4">
          <img
            src="https://i.ibb.co/WkF9d2T/pro-12.png"
            alt="Coupon Image"
            className="h-40 w-40 object-cover rounded-full border-4 border-white"
          />
        </div>
        <div className="absolute bottom-0 right-0 p-4">
          <img
            src="https://i.ibb.co/W3pHXSC/pro-11.jpg"
            alt="Coupon Image"
            className="h-40 w-40 object-cover rounded-full border-4 border-white"
          />
        </div>
        <div className="absolute top-0 left-0 p-4">
          <img
            src="https://i.ibb.co/WkF9d2T/pro-12.png"
            alt="Coupon Image"
            className="h-40 w-40 object-cover rounded-full border-4 border-white"
          />
        </div>
        <div className="absolute top-0 right-0 p-4">
          <img
            src="https://i.ibb.co/W3pHXSC/pro-11.jpg"
            alt="Coupon Image"
            className="h-40 w-40 object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-6xl font-extrabold mb-4">Exclusive Coupons</h2>
        <p className="text-xl text-gray-700">
          Enjoy special discounts with our exclusive coupons. Enter the codes during checkout to
          save on your next booking.
        </p>

        <div className="flex flex-wrap justify-center mt-8 space-x-6 relative">
          {coupons.map((coupon, index) => (
            <div
              key={index}
              className="relative bg-white p-4 rounded-lg shadow-md text-center"
              style={{ width: '300px' }}
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full p-3">
                <FiPercent size={30} color="#fff" />
              </div>
              <div className="text-blue-500">
                <p className="text-lg font-bold">{coupon.discount}</p>
              </div>
              <h3 className="text-2xl text-black font-bold mb-2">{coupon.code}</h3>
              <p className="text-sm text-gray-500">{coupon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coupons;
