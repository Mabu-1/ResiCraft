// LocationDetails.jsx
import React from 'react';

const LocationDetails = () => {
  const mapContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '70vh', // Adjust the height as needed
    overflow: 'hidden',
  };

  const mapImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit', // If you want a rounded border
  };

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Our Location</h2>
        <p className="text-lg text-gray-700">
          Discover the convenience of our apartment's location and find out how to get here.
        </p>

        {/* Updated Map Image */}
        <div className="mt-8" style={mapContainerStyle}>
          <img
            src="https://i.ibb.co/wQ20VWJ/pro-13.png" // Replace with your actual map image URL
            alt="Apartment Location Map"
            style={mapImageStyle}
          />
        </div>

        {/* Location Details */}
        <div className="mt-8 text-left">
          <h3 className="text-2xl font-bold mb-2">Address:</h3>
          <p className="text-lg text-gray-700">
            Gulshan, Dhaka, Bangladesh
          </p>

          <h3 className="text-2xl font-bold mt-4 mb-2">Directions:</h3>
          <p className="text-lg text-gray-700">
            Our apartment is nestled in the heart of Gulshan, Dhaka. To reach us:
            <br />
            <span className="font-bold">1. Head towards Gulshan Avenue:</span> Navigate the main road leading to Gulshan Avenue.
            <br />
            <span className="font-bold">2. Turn onto [Street Name]:</span> Take a turn onto the specified street.
            <br />
            <span className="font-bold">3. Follow the path:</span> Continue straight, and you'll find our apartments building on your left.
            <br />
            <span className="font-bold">4. Arrival:</span> Welcome to your new home!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
