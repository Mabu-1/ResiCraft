import React from 'react';
import { FiPercent } from 'react-icons/fi';
import UseCupons from '../../Hooks/UseCupons';
import Loading from '../Loading/Loading';
import Marquee from 'react-fast-marquee';  
import Card3 from './Card3';

const Coupons = () => {
  const { isLoading, data, refetch } = UseCupons();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="py-16 relative overflow-hidden">
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

        {/* Marquee to display coupon codes */}
        <Marquee pauseOnHover={true} speed={100}>
          {data.map(cupons =>
            <Card3 key={cupons._id} cupons={cupons}></Card3>)
          }
        </Marquee>
      </div>
    </section>
  );
};

export default Coupons;
