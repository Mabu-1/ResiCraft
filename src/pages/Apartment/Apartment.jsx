import React from 'react';
import Loading from '../Loading/Loading';
import Card from './Card';
import UseApartment from '../../Hooks/UseApartment';

const Apartment = () => {
  const { isLoading, data, refetch } = UseApartment();

  if (isLoading) {
    return <Loading />;
  }

  // Filter data based on the buyOption field
  const filteredApartments = data.filter((apartment) => apartment.buyOption);

  return (
    <div>
      <div className="text-center mt-4">
        {filteredApartments.map((apartment) => (
          <Card key={apartment._id} apartment={apartment} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Apartment;
