import React from 'react';
import { Link } from 'react-router';

const SinglePet = ({ singlePet }) => {

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="overflow-hidden">
        <img
          src={singlePet.image}
          alt={singlePet.name}
          className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">{singlePet.name}</h2>

        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Category:</span> {singlePet.category}
        </p>

        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Price:</span> {singlePet.price === 0 ? "Free for Adoption" : `${singlePet.price}`}
        </p>

        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Location:</span> {singlePet.location}
        </p>

        <p className="text-gray-600 mb-4">{singlePet.description}</p>

         <Link to={`/cardDetails/${singlePet._id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white 
          font-semibold 
          py-2 px-4 rounded w-full transition-colors duration-300">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePet;
