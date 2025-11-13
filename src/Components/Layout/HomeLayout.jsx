import React, { useEffect, useState } from "react";
import Navber from "../Navber";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer";

const HomeLayout = () => {
  
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);

  return (
    <div className="flex flex-col min-h-screen">
      
      <header>
        <Navber />
      </header>

      
      <main className="flex-grow">
        {loading ? (
         
          <div className="flex justify-center items-center h-[70vh]">
            <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
