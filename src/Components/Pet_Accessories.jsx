import React from 'react';

const Pet_Accessories = () => {
     const accessories = [
    { name: "Collar & Leash", bg: "bg-pink-200" },
    { name: "Bed", bg: "bg-yellow-200" },
    { name: "Toys", bg: "bg-green-200" },
    { name: "Food & Water Bowls", bg: "bg-blue-200" },
    { name: "Grooming Tools (Brush, Nail Cutter, Shampoo)", bg: "bg-purple-200" },
    { name: "Clothes for Pets", bg: "bg-orange-200" },
  ];
    return (
        <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Pet Accessories</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {accessories.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-lg shadow-lg p-5 hover:scale-105 transform transition duration-300`}
          >
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Pet_Accessories;