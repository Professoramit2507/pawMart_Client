import React from "react";
import { createBrowserRouter } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeLayout from "../Components/Layout/HomeLayout";
import Card from "../Components/Card";
import Pet_card from "../Components/Pet_card";
import Pets from "../Components/Pets";
import PetFood from "../Components/PetFood";
import Pet_Accessories from "../Components/Pet_Accessories";
import PetCare from "../Components/PetCare";
import Login from "../Components/Login";
import Register from "../Components/Register";
import CardDetails from "../Components/CardDetails";
import MyOrder from "../Components/MyOrder";
import AddListing from "../Components/AddListing";
import ListingDetails from "../Components/ListingDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error";
import MyBidss from "../Components/MyOrder";
import MyProduct from "../Components/MyProduct";
import MyBids from "../Components/MyBids";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Card />,
      },
      {
        path: "pet_card",
        element: <Pet_card />,
      },
      {
        path: "cardDetails/:id",
        loader: async ({ params }) => {
          const res = await fetch(`https://pawmartserver.vercel.app/pets/${params.id}`);
          const data = await res.json();
          return data;
        },
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "mybids",
        element: <PrivateRoute><MyBids /></PrivateRoute>,
      },
      {
        path: "listingProduct",
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: "listingDetails",
        element: <PrivateRoute><ListingDetails /></PrivateRoute>,
      },
      {
        path: "pets",
        element: <Pets />,
      },
      {
        path: "petfood",
        element: <PetFood />,
      },
      {
        path: "petacc",
        element: <Pet_Accessories />,
      },
      {
        path: "petcare",
        element: <PetCare />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;

