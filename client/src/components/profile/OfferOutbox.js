import _ from 'lodash';
import React from 'react';
//ADD ITEM OFFERED
const OfferOutbox = ({offerList}) => {
  const renderOutbox = () => {
    return _.map(offerList, offer => {
      //const offerId = {offerId: offer._id};
      return (
        <div key={offer._id}>
          <h3>Item Wanted</h3>
          <p>{offer.itemWanted.name}</p>
          <h3>Description</h3>
          <p>{offer.itemWanted.description}</p>
          <h3>Offer To</h3>
          <p>{offer.offerTo._id}</p>
          <button>Withdraw</button>
        </div>
      )
    });
  }
  return (
    <div>
      <h1>OFFER OUTBOX</h1>
      {renderOutbox()}
    </div>
  );
}



export default OfferOutbox;
