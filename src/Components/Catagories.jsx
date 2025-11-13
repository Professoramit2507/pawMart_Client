import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="p-10">
    
      <h2 className="text-center  ml-0 md:ml-[500px]">Catagories</h2>
      <div className="md:flex gap-20 mt-10 md:ml-30 ml-0">
        <div
          className="p-6 rounded-2xl shadow-lg cursor-pointer
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        hover:scale-105 transition-transform duration-300 text-white text-center w-60 mb-6"
        >
          <Link to="/pet_card" className="!no-underline">
            <h3 className="text-xl font-bold text-white">Pets (Adoption)</h3>
          </Link>
        </div>

        {/* Pet Food */}
        <div
          className="p-6 rounded-2xl shadow-lg cursor-pointer
        bg-gradient-to-r from-lime-500 via-green-400 to-emerald-500
        hover:scale-105 transition-transform duration-300 text-white text-center w-60 mb-6"
        >
          <Link to="/petfood" className="!no-underline">
            <h3 className="text-xl font-bold text-white">Pet Food</h3>
          </Link>
        </div>

        {/* Pet Accessories */}
        <div
          className="p-6 rounded-2xl shadow-lg cursor-pointer
        bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500
        hover:scale-105 transition-transform duration-300 text-white text-center w-60 mb-6"
        >
          <Link to="/petacc" className="!no-underline">
            <h3 className="text-xl font-bold text-white">Pet Accessories</h3>
          </Link>
        </div>

        {/* Pet Care Products */}
        <div
          className="p-6 rounded-2xl shadow-lg cursor-pointer
        bg-gradient-to-r from-amber-500 via-orange-400 to-pink-400
        hover:scale-105 transition-transform duration-300 text-white text-center w-60 mb-6"
        >
          <Link to="/petcare" className="!no-underline">
            <h3 className="text-xl font-bold text-white">Pet Care Products</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
