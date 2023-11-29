import React from 'react';

import Loading from '../Loading/Loading';
import Card2 from './Card2';
import UseAnnouncement from '../../Hooks/UseAnnoucement';

const ShowAnnouncement = () => {
  const { isLoading, data, refetch } = UseAnnouncement();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="text-center mt-4">
        {data.map((announcement) => (
          <Card2 key={announcement._id} announcement={announcement} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default ShowAnnouncement;
