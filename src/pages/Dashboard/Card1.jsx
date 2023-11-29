import React, { useContext } from 'react';
import Swal from 'sweetalert2';

import axios from 'axios';
import UseApartment from '../../Hooks/UseApartment';
import Loading from '../Loading/Loading';

const Card1 = ({ users, refetch }) => {
  

  const { isLoading, data } = UseApartment();

  if (isLoading) {
    return <Loading />;
  }

  const {_id, floorNumber, blockName, apartmentNumber, rent, date, status, userName, userEmail } = users;

  // Check if data is available before using filter
  const filteredApartments = data && data.filter((apartment) => apartment.apartmentNumber === apartmentNumber);

  // Check if the filteredApartments array is not empty before accessing its first element
  const id = filteredApartments.length > 0 ? filteredApartments[0]._id : null;

  const handleAccept = async (e) => {
    e.preventDefault();
    const myData = {
      status: 'accept',
    };

    try {
      const response = await axios.put(`https://appartment-server.vercel.app/users/${_id}`, myData);

      if (response.data.acknowledged) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Accept The User',
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      console.error('Error creating agreement', error);
      Swal.fire({
        icon: 'error',
        title: ' Error',
        text: 'An error occurred while creating the agreement.',
      });
    }
  };

  const handleReject = async (e) => {
    e.preventDefault();
    const myData = {
      status: 'reject',
    };
    const myData1 = {
      buyOption: true,
    };

    try {
      const response = await axios.put(`https://appartment-server.vercel.app/users/${_id}`, myData);
      const response1 = await axios.put(`https://appartment-server.vercel.app/apartment/${id}`, myData1);
      if (response.data.acknowledged) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Reject The User',
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      console.error('Error creating agreement', error);
      Swal.fire({
        icon: 'error',
        title: ' Error',
        text: 'An error occurred while creating the agreement.',
      });
    }
  };

  return (
    <div className="bg-white border-3 shadow-md rounded-lg p-4 m-4 flex justify-center">
      <div className="w-1/2 p-4">
        <h2 className="text-4xl font-bold text-blue-700">User: {userName}</h2>
        <p className="text-2xl text-gray-800 mt-4 font-bold">Email: {userEmail}</p>
        <p className="text-2xl text-gray-800 mt-4 font-bold">Floor: {floorNumber}</p>
        <p className="text-2xl text-gray-800 mt-4 font-bold">Block: {blockName}</p>
        <p className="text-2xl text-gray-800 mt-4 font-bold">Room No: {apartmentNumber}</p>
        <p className="text-2xl text-gray-800 mt-4 font-bold">Rent: {rent}Tk</p>
        <p className="text-2xl text-gray-800 mt-4 font-bold">Agreement Request Date: {date}</p>

        <div className="mt-8">
          <button
            onClick={handleAccept}
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none mr-4"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 focus:outline-none"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
