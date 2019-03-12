import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({id, itemTitle, itemDescription, cardButtonAction, cardButtonLabel, location}) => {

  const pageInfo = {id, itemTitle, itemDescription};

  const offer = {
    'hi':'hi'
  };
  console.log(location);
  const renderButton = () => {

    switch (location) {
      case 'profilePage':
        return (
          <button onClick={() => console.log('edit')} >
            {cardButtonLabel}
          </button>
        );

      case 'itemPage':
        return (
          <button onClick={() => cardButtonAction(offer)}>
            {cardButtonLabel}
          </button>
        );
      default:
        return (
          <Link to={`/item/${id}`}>
            <button onClick={() => cardButtonAction(pageInfo)} >
              {cardButtonLabel}
            </button>
          </Link>
        );
    }
  }
  return (
    <div>
      <h1>
        {itemTitle || 'null'}
      </h1>
      <p>
        {itemDescription || 'null'}
      </p>
      {renderButton()}
    </div>
  )
}

export default ItemCard;
