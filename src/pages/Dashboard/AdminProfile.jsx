import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import UseUser from '../../Hooks/UseUser';
import UseApartment from '../../Hooks/UseApartment';
import Loading from '../Loading/Loading';

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const { isLoading: userLoading, data: userData, refetch: userRefetch } = UseUser();
  const { data: apartmentData } = UseApartment();

  // Check if userData and apartmentData are defined
  if (!userData || !apartmentData) {
    // You can render a loading indicator or handle the loading state accordingly
    return <Loading></Loading>;
  }

  const rooms = apartmentData.length;

  const filteredApartments = apartmentData.filter((apartment) => apartment.buyOption);
  const total = userData.length;
  const available = filteredApartments.length;

  const filteredUsers = userData.filter((user) => user.status === 'accept');

  const members = filteredUsers.length;
  const users = total - members;

  const percentageAvailable = ((available / rooms) * 100).toFixed(2);
  const percentageBooked = (((rooms - available) / rooms) * 100).toFixed(2);

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-center">
        <img src={user.photoURL} alt="Profile" className="w-16 h-16 object-cover rounded-full" />
      </div>
      <div className="mt-4 text-center">
        <p className="text-xl font-semibold">{user.displayName}</p>
        <p className="text-gray-500">{user.email}</p>

        {/* Additional Information */}
        <div className="mt-4">
          <p>Total Number of Rooms: {rooms}</p>
          <p>Percentage of Available Rooms: {percentageAvailable}%</p>
          <p>Percentage of Booked/Rented/Unavailable Rooms: {percentageBooked}%</p>
          <p>Number of Users: {users}</p>
          <p>Number of Members: {members}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
