import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const Login = () => {
  const { signInWithGoogle, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter email and password.",
      });
      return;
    }

    signInUser(email, password)
      .then((result) => {
        console.log("Login successful:", result.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
        }).then(() => {
          navigate("/"); // Redirect after the success alert is closed
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google Login successful:", result.user);
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          text: "Welcome back!",
        }).then(() => {
          navigate("/"); // Redirect after the success alert is closed
        });
      })
      .catch((error) => {
        console.error("Google Login error:", error);
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin}>
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
            className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Error */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition mt-4"
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-6 justify-center">
          <span className="mx-4 text-gray-500">OR</span>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
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

        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
