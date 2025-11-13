import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink } from "react-router";
import logoPng from "../assets/download.png";
import { AuthContext } from "../Context/AuthContext";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleSignOut = () => {
    signOutUser()
      .then((data) => {
        console.log("Signed out:", data.user);
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
   
    <motion.div
      className="navbar bg-base-100 w-10/12 mt-6 border mx-auto shadow-sm flex items-center justify-between px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        onChange={(e) => handleTheme(e.target.checked)}
        type="checkbox"
        defaultChecked={localStorage.getItem("theme") === "dark"}
        className="toggle"
      />

      <div className="flex items-center gap-3">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/" className="!no-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/pet_card" className="!no-underline">
                Pets & Supplies
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/mybids" className="!no-underline">
                    My Bids
                  </Link>
                </li>
                <li>
                  <Link to="/listingProduct" className="!no-underline">
                    Listing_Product
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

       
        <img className="w-16" src={logoPng} alt="PawMart Logo" />
        <NavLink
          to="/"
          className="text-xl font-bold !no-underline text-green-600"
        >
          <Typewriter
            words={["PawMart"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </NavLink>
      </div>


      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link to="/" className="!no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pet_card" className="!no-underline">
              Pets & Supplies
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/mybids" className="!no-underline">
                  My Bids
                </Link>
              </li>
              <li>
                <Link to="/listingProduct" className="!no-underline">
                  Listing_Product
                </Link>
              </li>
              <li>
                <Link to="/listingDetails" className="!no-underline">
                  Listing_Details
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

<div className="flex items-center gap-2">
  {user ? (
    <>

      <img
        src={user?.photoURL}
        alt={user.displayName || "User Avatar"}
        className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
      />
      <button
        onClick={handleSignOut}
        className="btn btn-outline btn-secondary"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login">
        <button className="btn btn-outline btn-success">Login</button>
      </Link>
      <Link to="/register">
        <button className="btn btn-success text-white">Register</button>
      </Link>
    </>
  )}
  
</div>
 
    </motion.div>
  );
};

export default Navbar;

