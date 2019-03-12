import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({id, itemTitle, itemDescription, cardButtonAction, cardButtonLabel, type}) => {

  const pageInfo = {id, itemTitle, itemDescription};

  const offer = {
    cardButtonLabel,
    type
  };

  const renderButton = () => {
    
    switch (type) {
      case 'profileInventory':
        return (
          <button onClick={() => cardButtonAction(pageInfo)} >
            {cardButtonLabel}
          </button>
        );

      case 'marketplace':
        return (
          <Link to={`/item/${id}`}>
            <button onClick={() => cardButtonAction(pageInfo)} >
              {cardButtonLabel}
            </button>
          </Link>
        );

      case 'offerInventory':

        return (
          <button onClick={() => cardButtonAction(offer)}>
            {cardButtonLabel}
          </button>
        );
      default:
        return;

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
