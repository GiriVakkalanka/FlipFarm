import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({id, itemTitle, itemDescription, loadItemPage}) => {
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
        <button onClick={() => loadItemPage(pageInfo)}>
          See More
        </button>
      </Link>
    </div>
  )
}

export default ItemCard;
