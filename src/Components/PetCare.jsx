import React from 'react';

const PetCare = () => {
     const products = [
    { name: "Shampoo & Conditioner", bg: "bg-blue-200" },
    { name: "Brush & Comb", bg: "bg-green-200" },
    { name: "Nail Cutter & Grooming Tools", bg: "bg-yellow-200" },
    { name: "Dental Care (Toothbrush & Toothpaste)", bg: "bg-pink-200" },
    { name: "Flea & Tick Treatment", bg: "bg-purple-200" },
    { name: "Vitamins & Supplements", bg: "bg-orange-200" },
  ];
    return (
        <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Pet Care Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300`}
          >
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
    );
};

export default PetCare;