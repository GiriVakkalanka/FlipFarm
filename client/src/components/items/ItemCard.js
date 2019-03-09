import React from 'react';

const ItemCard = ({itemTitle, itemDescription}) => {
  return (
    <div>
      <h1>
        {itemTitle}
      </h1>
      <p>
        {itemDescription}
      </p>
    </div>
  )
}

export default ItemCard; 
