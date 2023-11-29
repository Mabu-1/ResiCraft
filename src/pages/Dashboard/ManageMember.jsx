import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import UseUser from '../../Hooks/UseUser';
import Swal from 'sweetalert2';
import axios from 'axios';
import UseApartment from '../../Hooks/UseApartment';

const ManageMember = () => {
  const { isLoading: userLoading, data: userData, refetch: userRefetch } = UseUser();
  const { data: apartmentData } = UseApartment();

  const filteredUsers = userData.filter((user) => user.status === "accept");

  const handleDeleteUser = async (id, apartmentNumber) => {
    const myUserData = {
      status: 'reject',
    };
    const myApartmentData = {
      buyOption: true,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.put(`http://localhost:5001/users/${id}`, myUserData);
          const apartmentFiltered = apartmentData.filter((apartment) => apartment.apartmentNumber === apartmentNumber);
          const apartmentId = apartmentFiltered[0]._id;
          const response1 = await axios.put(`http://localhost:5001/apartment/${apartmentId}`, myApartmentData);

          if (response.data.acknowledged && response1.data.acknowledged) {
            Swal.fire({
              icon: 'success',
              title: 'User deleted successfully!',
            });
            userRefetch(); // Refetch the user data after deletion
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          }
        } catch (error) {
          console.error('Error deleting user', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {filteredUsers.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.userName}</td>
                <td>{user.userEmail}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id, user.apartmentNumber)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMember;
