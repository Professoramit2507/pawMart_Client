import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Pets = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className=''>
      <h2>I am Pet</h2>
    </div>
  );
};

export default Pets;
