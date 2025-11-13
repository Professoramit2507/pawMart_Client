import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2

const Register = () => {
  const { signInWithGoogle, createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");

  // ✅ Google Sign In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((data) => {
        console.log("Google Login Successful:", data.user);
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          text: "Welcome to the app!",
        }).then(() => navigate("/"));
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  // ✅ Register Handler
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        text: "Password must contain at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long.",
      });
      return;
    }

    if (!name || !email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill in all required fields.",
      });
      return;
    }

    // ✅ Create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User Created:", user);

        // ✅ Update profile
        updateUserProfile({ displayName: name, photoURL })
          .then(() => {
            console.log("Profile Updated");
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: "Your account has been created successfully.",
            }).then(() => {
              navigate("/"); // Redirect after alert
            });
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text: err.message,
            });
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: err.message,
        });
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleRegister}>
          {/* Name */}
          <label className="block mb-2 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Email */}
          <label className="block mb-2 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Password */}
          <label className="block mb-2 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Photo URL */}
          <label className="block mb-2 font-semibold" htmlFor="photoURL">
            Photo URL
          </label>
          <input
            type="url"
            id="photoURL"
            placeholder="Enter photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Error */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Register Button */}
          <button
            className="w-full mt-2 mb-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            type="submit"
          >
            Register
          </button>
        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center mb-2 justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 533.5 544.3"
          >
            <path
              fill="#4285F4"
              d="M533.5 278.4c0-18.2-1.6-35.7-4.8-52.7H272v99.8h146.9c-6.3 34-25 62.8-53.2 82v68h85.9c50.3-46.3 81.9-114.7 81.9-197.1z"
            />
            <path
              fill="#34A853"
              d="M272 544.3c72.6 0 133.6-23.9 178.1-64.9l-85.9-68c-23.7 15.9-54 25.2-92.2 25.2-70.9 0-131-47.9-152.5-112.4h-89.6v70.7c44.4 88.2 135.5 149.4 242.1 149.4z"
            />
            <path
              fill="#FBBC04"
              d="M119.5 321.2c-10.6-31.6-10.6-65.9 0-97.5v-70.7h-89.6c-37 72.7-37 159.6 0 232.3l89.6-64.1z"
            />
            <path
              fill="#EA4335"
              d="M272 107.7c39.5 0 75 13.6 103 40.5l77.2-77.2C405 24 344 0 272 0 165.3 0 74.3 61.2 29.9 149.4l89.6 70.7c21.5-64.5 81.6-112.4 152.5-112.4z"
            />
          </svg>
          <span>Login with Google</span>
        </button>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;



