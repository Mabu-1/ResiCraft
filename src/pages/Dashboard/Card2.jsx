import React, { useContext } from 'react';
import { BiCommentDetail } from 'react-icons/bi'; // Example React Icon


const Card2 = ({ announcement }) => {
  const { title, description } = announcement;

  return (
    <div className="bg-white border-3 shadow-md rounded-lg p-4 m-4 flex justify-center">
      <div className="w-1/2 p-4">
        <h2 className="text-4xl font-bold text-blue-700">
          {/* Example React Icon */}
          <BiCommentDetail className="inline-block mr-2" />
          Announcement
        </h2>
        <p className="text-2xl text-gray-800 mt-4 font-bold">{title}</p>
        <p className="text-lg text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card2;
