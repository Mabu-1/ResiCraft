import React from 'react';
import { FiPercent } from 'react-icons/fi';

const Card3 = ({ cupons }) => {
  const { couponCode, discountPercentage, couponDescription } = cupons;

  return (
    <div className="bg-white border-2 border-blue-500 rounded-md p-6 m-4 w-64 h-72 flex flex-col justify-between">
      <div className="flex items-center mb-4">
        <FiPercent className="text-4xl text-blue-500 mr-2" />
        <h3 className="text-2xl font-extrabold">{couponCode}</h3>
      </div>
      <p className=" text-xl text-gray-600 mb-4 font-bold">{couponDescription}</p>
      <div className="flex justify-center ">
        <span className= " text-xl text-gray-700 font-bold">Discount: {discountPercentage}%</span>
     
      </div>
    </div>
  );
};

export default Card3;
