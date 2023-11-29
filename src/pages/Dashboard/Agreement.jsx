import React from 'react';
import UseUser from '../../Hooks/UseUser';
import Loading from '../Loading/Loading';
import Card1 from './Card1';

const Agreement = () => {
  const { isLoading, data, refetch } = UseUser();

  if (isLoading) {
    return <Loading />;
  }

  // Filter users with 'pending' status
  const pendingUsers = data.filter((user) => user.status === 'pending');

  return (
    <div>
      <div className="text-center mt-4">
        {pendingUsers.map((users) => (
          <Card1 key={users._id} users={users} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Agreement;
