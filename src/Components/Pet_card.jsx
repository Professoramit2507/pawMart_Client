import React, { useState } from 'react';
import All_Card from './All_Card';

const allPetCardPromise = fetch('https://pawmartserver.vercel.app/pets')
  .then(res => res.json());

const Pet_card = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <h2 className='text-center text-2xl mt-6 p-10'>All Pet</h2>

      {/*  Search  */}
      <div className="flex justify-center mb-6 border-2 w-[300px] mx-auto rounded-2xl p-2">
        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <All_Card allPetCardPromise={allPetCardPromise} search={search} />
      </div>
    </div>
  );
};

export default Pet_card;
