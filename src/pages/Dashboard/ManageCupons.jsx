import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import UseCupons from '../../Hooks/UseCupons';
import Loading from '../Loading/Loading';

const ManageCupons = () => {
    const [couponData, setCouponData] = useState({
        couponCode: '',
        discountPercentage: '',
        couponDescription: '',
      });
    
  const { isLoading, data, refetch } = UseCupons();

  if (isLoading) {
    return <Loading />;
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCouponData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCoupon = async () => {
    try {
      const res = await axios.post("https://appartment-server.vercel.app/cupons", couponData);

      if (res.data.acknowledged) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Coupons created successfully',
          showConfirmButton: false,
          timer: 1500,
        });

        // Reset couponData after successful submission
        setCouponData({
          couponCode: '',
          discountPercentage: '',
          couponDescription: '',
        });

        // Close the modal
        document.getElementById('my_modal_1').close();

        // Refetch coupons data to update the table
        refetch();
      }
    } catch (error) {
      console.error('Error creating coupons', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div>
      {/* Display Coupons in Tabular Form */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">All Coupons</h2>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Coupon Code</th>
              <th>Discount Percentage</th>
              <th>Coupon Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coupon) => (
              <tr key={coupon._id}>
                <td>{coupon.couponCode}</td>
                <td>{coupon.discountPercentage}%</td>
                <td>{coupon.couponDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Daisy UI Modal */}
      <div className="flex justify-center mt-8">
        <button
          className="btn"
          onClick={() => document.getElementById('my_modal_1').showModal()}
        >
          Add Coupon
        </button>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Coupon</h3>
          <form method="dialog">
            <label className="block mb-4">
              Coupon Code:
              <input
                type="text"
                name="couponCode"
                placeholder="Enter Coupon Code"
                className="border rounded w-full py-2 px-3"
                value={couponData.couponCode}
                onChange={handleInputChange}
              />
            </label>
            <label className="block mb-4">
              Discount Percentage:
              <input
                type="number"
                name="discountPercentage"
                placeholder="Enter Discount Percentage"
                className="border rounded w-full py-2 px-3"
                value={couponData.discountPercentage}
                onChange={handleInputChange}
              />
            </label>
            <label className="block mb-4">
              Coupon Description:
              <textarea
                name="couponDescription"
                placeholder="Enter Coupon Description"
                className="border rounded w-full py-2 px-3"
                value={couponData.couponDescription}
                onChange={handleInputChange}
              />
            </label>
            <div className="modal-action">
              <button
                type="button"
                onClick={handleAddCoupon}
                className="btn"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('my_modal_1').close()}
                className="btn"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageCupons;
