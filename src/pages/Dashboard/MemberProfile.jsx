import React, { useContext } from 'react';
import UseUser from '../../Hooks/UseUser';
import Loading from '../Loading/Loading';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUser, FaEnvelope, FaCheck, FaBuilding, FaHome, FaDollarSign } from 'react-icons/fa';

const MemberProfile = () => {
    const { isLoading, data, refetch } = UseUser();
    const { user } = useContext(AuthContext);
    const email = user.email;
    const img = user.photoURL;
    const name = user.displayName;

    if (isLoading) {
        return <Loading />;
    }

    // Filter data based on the user's email
    const filteredUser = data.filter((users) => users.userEmail === email);
console.log(filteredUser);
    // Check if data exists for the user
    if (filteredUser.length > 0) {
        const floorNumber = filteredUser[0].floorNumber;
        const blockName = filteredUser[0].blockName;
        const apartmentNumber = filteredUser[0].apartmentNumber;
        const rent = filteredUser[0].rent;
        const date = filteredUser[0].date;

        return (
            <div className="flex items-center justify-center p-8">
                <div className="bg-white shadow-md rounded-lg p-8">
                    <div className="text-center">
                        <img src={img} alt="User Avatar" className="w-20 h-20 rounded-full mx-auto" />
                        <h1 className="text-lg font-bold mt-4">{name}</h1>
                        <p className="text-gray-500">{email}</p>
                    </div>

                    <hr className="my-4" />

                    <div className="text-center">
                        <h2 className="text-lg font-bold mb-2">Agreement Information</h2>
                        <p>Date of Agreement Accept: {date || 'None'}</p>
                        <div className='flex gap-5 justify-center py-5'>
                        <FaBuilding  className='mt-1' /> 
                        <p >Floor Number: {floorNumber || 'None'}</p>
                        </div>
                        <div className='flex gap-5 justify-center py-5'>
                        <FaBuilding  className='mt-1' /> 
                        <p> Block Name: {blockName || 'None'}</p>
                        </div>
                        <div className='flex gap-5 justify-center py-5'>
                        <FaHome  className='mt-1' /> 
                        <p>Apartment Number: {apartmentNumber || 'None'}</p>
                        </div>
                        <div className='flex gap-5 justify-center py-5'>
                        <FaDollarSign  className='mt-1' /> 
                        <p> Rent: {rent ? `${rent} Tk` : 'None'}</p>
                        </div>
                       
                        \
                       
                     
                    </div>
                </div>
            </div>
        );
    } else {
        // Render a simpler version if no data is found
        return (
            <div className="flex items-center justify-center p-8">
                <div className="bg-white shadow-md rounded-lg p-8">
                    <div className="text-center">
                        <img src={img} alt="User Avatar" className="w-20 h-20 rounded-full mx-auto" />
                        <h1 className="text-lg font-bold mt-4">{name}</h1>
                        <p className="text-gray-500">{email}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default MemberProfile;
