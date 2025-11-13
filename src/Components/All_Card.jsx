import React, { use } from 'react';
import CardAll from './CardAll';

const All_Card = ({ allPetCardPromise, search }) => {
  const allCard = use(allPetCardPromise);
  const filteredCards = allCard.filter(card =>
    card.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mb-8 gap-6'>
      {filteredCards.map(card => (
        <CardAll key={card._id} card={card} />
      ))}
    </div>
  );
};

export default All_Card;
