import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const ListingDetails = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);


  useEffect(() => {
    if (user?.email) {
      fetch(`https://pawmartserver.vercel.app/pets?owner=${user.email}`)
        .then((res) => res.json())
        .then((data) => setListings(data))
        .catch((err) => console.log(err));
    }
  }, [user]);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This listing will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pawmartserver.vercel.app/pets/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            Swal.fire("Deleted!", "Your listing has been deleted.", "success");
            setListings(listings.filter((listing) => listing._id !== id));
          })
          .catch((err) => console.log(err));
      }
    });
  };

 
  const handleEdit = (listing) => {
    setSelectedListing(listing);
    setIsUpdateOpen(true);
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedListing = {
      name: e.target.name.value,
      category: e.target.category.value,
      location: e.target.location.value,
      price: e.target.price.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    fetch(`https://pawmartserver.vercel.app/pets/${selectedListing._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedListing),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Updated!", "Your listing has been updated.", "success");
        setListings(
          listings.map((item) =>
            item._id === selectedListing._id ? data : item
          )
        );
        setIsUpdateOpen(false);
        setSelectedListing(null);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Listings</h1>

      {listings.length === 0 ? (
        <p className="text-center text-gray-500">You have no listings yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Location</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing) => (
                <tr key={listing._id} className="border-b">
                  <td className="py-3 px-6">
                    <img
                      src={listing.image}
                      alt={listing.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-6">{listing.name}</td>
                  <td className="py-3 px-6">{listing.category}</td>
                  <td className="py-3 px-6">{listing.location}</td>
                  <td className="py-3 px-6">
                    {listing.price === 0 ? "Free" : `$${listing.price}`}
                  </td>
                  <td className="py-3 px-6 flex gap-2">
                    <button
                      onClick={() => handleEdit(listing)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(listing._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

     
      {isUpdateOpen && selectedListing && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
              Update Listing
            </h2>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedListing.name}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={selectedListing.category}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={selectedListing.location}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={selectedListing.price}
                  className="input input-bordered w-full"
                  min="0"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={selectedListing.image}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={selectedListing.description}
                  className="textarea textarea-bordered w-full"
                  rows="3"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsUpdateOpen(false)}
                  className="btn btn-outline border-blue-400 text-blue-600 hover:bg-blue-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition-transform border-none"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingDetails;
