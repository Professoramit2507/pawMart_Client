import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const CardDetails = () => {
  const pet = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  
  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      Product_name: e.target.product_name.value,
      Pets_id: e.target.p_id.value,
      Buyer_name: e.target.name.value,
      Buyer_email: e.target.email.value,
      Price: e.target.price.value,
      Quantity: e.target.quantity.value,
      Address: e.target.address.value,
      Date: e.target.date.value,
      Phone: e.target.phone.value,
    };

    fetch("https://pawmartserver.vercel.app/bids", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Order Placed Successfully!",
          text: "Thank you for your order. We’ll contact you soon!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#3B82F6",
        });
        setIsOpen(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Image  */}
      <div className="w-90 mx-auto overflow-hidden">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">{pet.name}</h1>
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
            {pet.category}
          </span>
        </div>

        <h3 className="text-xl text-gray-600 mb-2">Location: {pet.location}</h3>
        <p className="text-gray-700 mb-6">{pet.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">
            Price: {pet.price === 0 ? "Free for Adoption" : `$${pet.price}`}
          </span>

          <button
            onClick={handleOpen}
            className="bg-blue-600 text-white px-6 py-2 rounded font-bold shadow hover:bg-blue-700 transition-colors duration-300"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Modal  */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 border-t-4 border-blue-500 relative">
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
              Confirm Your Order
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Buyer Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Buyer Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={user?.displayName || ""}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={user?.email || ""}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Product ID
                  </label>
                  <input
                    name="p_id"
                    type="text"
                    value={pet._id}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Product Name
                  </label>
                  <input
                    name="product_name"
                    type="text"
                    value={pet.name}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Quantity & Price */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Quantity
                  </label>
                  <input
                    name="quantity"
                    type="number"
                    value={pet.category === "Pets" ? 1 : "1"}
                    readOnly={pet.category === "Pets"}
                    min="1"
                    className={`input input-bordered w-full ${
                      pet.category === "Pets"
                        ? "bg-gray-100 cursor-not-allowed"
                        : ""
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Price
                  </label>
                  <input
                    name="price"
                    type="text"
                    value={pet.price}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  placeholder="Enter your shipping address"
                  className="textarea textarea-bordered w-full focus:ring-2 focus:ring-blue-400"
                  required
                ></textarea>
              </div>

              {/* Date & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Pick-up Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    required
                    className="input input-bordered w-full focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+8801XXXXXXXXX"
                    required
                    className="input input-bordered w-full focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1">
                  Additional Notes
                </label>
                <textarea
                  placeholder="Any special instructions (optional)"
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn btn-outline border-blue-400 text-blue-600 hover:bg-blue-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition-transform border-none"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;


