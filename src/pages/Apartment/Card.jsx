// Card.jsx

import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const Card = ({ apartment, refetch }) => {
  const { _id, image, floorNumber, blockName, apartmentNumber, rent } = apartment;
  const { user } = useContext(AuthContext);
  
  const name = user.displayName;
  const email = user.email;
  const lastSignInTime = user.metadata.lastSignInTime; // Access lastSignInTime directly from user object
   console.log(lastSignInTime);
  const handleAgreement = async (e) => {
    e.preventDefault();
    const myData = {
      userName: name,
      userEmail: email,
      floorNumber: apartment.floorNumber,
      blockName: apartment.blockName,
      apartmentNumber: apartment.apartmentNumber,
      rent: apartment.rent,
      date: lastSignInTime,
      status: 'pending',
    };

    const myData1 = {
      buyOption: false,
    };

    console.log(myData);

    try {
      const response = await axios.post("https://appartment-server.vercel.app/users", myData);
      const response1 = await axios.put(`https://appartment-server.vercel.app/apartment/${_id}`, myData1);
      refetch();

      if (response.data.acknowledged) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Agreement Successful',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error('Error creating agreement', error);
      Swal.fire({
        icon: 'error',
        title: 'Agreement Error',
        text: 'An error occurred while creating the agreement.',
      });
    }
  };

  return (
    <div className="bg-white border-3 shadow-md rounded-lg p-4 m-4 flex">
      <div className="w-1/2">
        <img src={image} alt="Apartment" className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="w-1/2 p-4">
        <h2 className="text-4xl font-bold text-blue-700">Floor {floorNumber}</h2>
        <p className="text-2xl text-gray-800 mt-4 font-bold">Block: {blockName}</p>
        <p className="text-2xl text-gray-800 mt-4 font-bold">Apartment No: {apartmentNumber}</p>
        <p className="text-2xl text-gray-800 mt-4 font-bold">Rent: &#2547;{rent.toLocaleString()}</p>

        <div className="mt-8">
          <button
            onClick={handleAgreement}
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none"
          >
            Agree to Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
