import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({id, itemTitle, itemDescription}) => {
  return (
    <div>
      <h1>
        {itemTitle || 'null'}
      </h1>
      <p>
        {itemDescription || 'null'}
      </p>
      <Link to={`/item/${id}`}>
        <button>
          See More
        </button>
      </Link>
    </div>
  )
}

export default ItemCard;
