import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const AddListing = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    location: "",
    description: "",
    image: "",
    date: "",
    email: user?.email || "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      if (value === "Pets") {
        setFormData((prev) => ({ ...prev, category: value, price: 0 }));
      } else {
        setFormData((prev) => ({ ...prev, category: value, price: "" }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://pawmartserver.vercel.app/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Listing added successfully! 🎉");
          setFormData({
            name: "",
            category: "",
            price: "",
            location: "",
            description: "",
            image: "",
            date: "",
            email: user?.email || "",
          });
        } else {
          toast.error("Something went wrong!");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to save listing!");
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-semibold mb-5 text-center text-purple-600">
        Add New Listing
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Product / Pet Name */}
        <div>
          <label className="block font-medium mb-1">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter name"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Dogs">Dogs</option>
            
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
            min="0"
            readOnly={formData.category === "Pets"}
            placeholder="Enter price"
          />
          {formData.category === "Pets" && (
            <small className="text-gray-500">Price is 0 for Pets</small>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter location"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Write short description..."
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-1">Image (URL)</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
            placeholder="Enter image URL"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="mt-3 w-32 h-32 object-cover rounded-md border"
            />
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block font-medium mb-1">Date (Pick Up)</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        {/* Email (readonly) */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full border px-3 py-2 rounded-md bg-gray-100 text-gray-600"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddListing;

