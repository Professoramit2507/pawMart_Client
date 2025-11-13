import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Catagories from "./Catagories";
import Latest_Pet from "./Latest_Pet";


const latestPetPromise = fetch('https://pawmartserver.vercel.app/latest_pet')
.then(res=>res.json())

function UncontrolledExample() {
  return (
    <div className="w-11/12 mx-auto">
      <Carousel className="mt-10 mb-10">
 
  <Carousel.Item>
    <img
      className="d-block w-100 lg:ml-10 ml-0"
      src="https://plus.unsplash.com/premium_photo-1710406095492-7e62eba19745?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1202"
      alt="Golden Retriever Puppy"
      style={{
        
        height: "500px",
        width:"200px"
        
      }}
    />
    <Carousel.Caption>
      <h3 className="text-lg md:text-2xl font-semibold text-black">Golden Retriever Puppy</h3>
      <p className="text-sm md:text-base text-black">Friendly and playful, perfect for your family.</p>
    </Carousel.Caption>
  </Carousel.Item>

 
  <Carousel.Item>
    <img
      className="d-block w-100 lg:ml-10 ml-0"
      src="https://plus.unsplash.com/premium_photo-1718055460110-ef435437bed6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      alt="Cute Beagle"
      style={{
        objectFit: "cover",
        height: "500px",
      }}
    />
    <Carousel.Caption>
      <h3 className="text-lg md:text-2xl font-semibold text-black">Cute Beagle</h3>
      <p className="text-sm md:text-base text-black">Loving and energetic companion for any home.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100 lg:ml-10 ml-0"
      src="https://plus.unsplash.com/premium_photo-1725408084509-f5b30c6f1b7a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      alt="Playful Labrador"
      style={{
        objectFit: "cover",
        height: "500px",
      }}
    />
    <Carousel.Caption>
      <h3 className="text-lg md:text-2xl font-semibold text-black">Playful Labrador</h3>
      <p className="text-sm md:text-base text-black">Friendly, loyal, and loves to play outdoors.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            img.d-block {
              height: 300px !important;
            }
          }
          @media (max-width: 480px) {
            img.d-block {
              height: 220px !important;
            }
          }
        `}
      </style>

      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto">
      
        <Catagories></Catagories>
      </div>
      <div>
          <Latest_Pet latestPetPromise={latestPetPromise}></Latest_Pet>
      </div>
    </div>
  );
}

export default UncontrolledExample;
