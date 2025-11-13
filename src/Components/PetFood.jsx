import React from "react";

const PetFood = () => {
  const dryFood = ["Royal Canin", "Hill’s Science Diet", "Pedigree", "Blue Buffalo"];
  const wetFood = ["Royal Canin Wet Food", "Hill’s Canned Food", "Pedigree Canned Food"];
  const homemadeFood = ["Rice + Meat (Chicken, Beef, Fish)", "Vegetables (Carrot, Peas, Pumpkin)", "Eggs"];

  const foodCategories = [
    { title: "Dry Food", items: dryFood, bg: "bg-yellow-200" },
    { title: "Wet Food", items: wetFood, bg: "bg-blue-200" },
    { title: "Homemade Food", items: homemadeFood, bg: "bg-green-200" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Dog Food List</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {foodCategories.map((category, index) => (
          <div
            key={index}
            className={`${category.bg} rounded-lg shadow-lg p-5 hover:scale-105 transform transition duration-300`}
          >
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {category.items.map((item, idx) => (
                <li key={idx} className="text-gray-700 font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetFood;
