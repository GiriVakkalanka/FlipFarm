import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({id, itemTitle, itemDescription, cardButtonAction, cardButtonLabel}) => {
  const pageInfo = {id, itemTitle, itemDescription};
  //console.log(pageInfo);
  return (
    <div>
      <h1>
        {itemTitle || 'null'}
      </h1>
      <p>
        {itemDescription || 'null'}
      </p>
      <Link to={`/item/${id}`}>
        <button onClick={() => cardButtonAction(pageInfo)} >
          {cardButtonLabel}
        </button>
      </Link>
    </div>
  )
}

export default ItemCard;
