import { useState } from "react";


import axios from "axios";
import Swal from "sweetalert2";


const Announcement = () => {
   

    const [assignment, setAssignment] = useState({
        title: "",
        description: "",
       
    });

    const handleInputChange = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const { name, value } = e.target;
        setAssignment({
            ...assignment,
            [name]: value,
        });
    };

    

    const handleCreateAnnouncement = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const form = e.target;
        const myData = {
            title: form.title?.value || "not Given",
            description: form.description?.value || "not Given",
          
        };

        console.log(myData);

        try {
            const res = await axios.post("https://appartment-server.vercel.app/announcement", myData);
            console.log(res)
            if (res.data.acknowledged) {
                Swal.fire({
                    position: 'top-end', // You can use any valid position value
                    icon: 'success',
                    title: 'Announcement created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        } catch (error) {
            console.log(error);
        }

        // Show success message using a toast or modal.

        // Clear the form or reset the assignment state if needed.
        setAssignment({
            title: "",
            description: "",
           
        });
    };

    return (
        <div className="w-4/5 mx-auto mt-8 mb-10">
            <form onSubmit={handleCreateAnnouncement} className="space-y-4">
                <div>
                    <label className="text-xl font-bold">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={assignment.title}
                        onChange={handleInputChange}
                        className="border rounded-md p-2 w-full"
                        required // Add required attribute
                    />
                </div>
                <div>
                    <label className="text-xl font-bold">Description:</label>
                    <textarea
                        name="description"
                        value={assignment.description}
                        onChange={handleInputChange}
                        className="border rounded-md p-2 w-full h-24"
                        required // Add required attribute
                    />
                </div>
                
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="flex justify-center bg-blue-500 text-white text-xl font-bold py-2 px-4 rounded-md hover-orange-500 transition duration-300 ease-in-out"
                    >
                        Create Announcement
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Announcement;
