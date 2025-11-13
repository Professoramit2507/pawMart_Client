import React, { use } from 'react';
import SinglePet from './SinglePet';
import imgg from '../assets/images.jpg'
import i1 from '../assets/download (11).jpg'
import i2 from '../assets/download (12).jpg'
import i3 from '../assets/download (13).jpg'

const Latest_Pet = ({latestPetPromise}) => {
    const pet = use(latestPetPromise)
    //console.log('6 pet:',pet)
    return (
       <div>
        <h2 className='text-center text-2xl mt-6'>Latest Pet</h2>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 mt-4'>
            
            {
                pet.map (singlePet => 
                <SinglePet key={singlePet._id} singlePet={singlePet}></SinglePet>)
            }
        </div>
           <div>
     

     <section id="why-adopt" className="py-16 bg-green-50">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-green-700 mb-6">
      Why Adopt from PawMart?
    </h2>
    <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
      <img
        src={imgg}
        className="w-50 h-50 rounded-xl object-cover shadow-md"
      />
      <div className="text-left md:text-left max-w-xl">
        <p className="text-gray-700 mb-4">
          Adopting a pet saves a life and gives a loving home to an animal in need. 
          By choosing adoption, you also help reduce overcrowding in shelters and support responsible pet ownership.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Give a forever home to a rescued pet</li>
          <li>Support animal welfare and rescue initiatives</li>
          <li>Get a loving companion who’s grateful for a second chance</li>
        </ul>
      </div>
    </div>
  </div>
</section>


     <section id="pet-heroes" className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-green-700 mb-10">Meet Our Pet Heroes</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <img
          src={i1}
          className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
        />
        <h3 className="text-xl font-semibold text-green-800">Sarah Khan</h3>
        <p className="text-gray-600 mt-2 text-center">
          Adopted Max and provides daily love and care, inspiring others to adopt pets.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <img
          src={i2}
          className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
        />
        <h3 className="text-xl font-semibold text-green-800">Rafiq Ahmed</h3>
        <p className="text-gray-600 mt-2 text-center">
          Rescued Bella from the streets and now shares her story to raise awareness.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <img
          src={i3}
          className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
        />
        <h3 className="text-xl font-semibold text-green-800">Nadia Rahman</h3>
        <p className="text-gray-600 mt-2 text-center">
          Dedicated to fostering pets until they find loving homes and families.
        </p>
      </div>

    </div>
  </div>
</section>

    </div>
       </div>
    );
};

export default Latest_Pet;