import React from 'react';
import _ from 'lodash';

const OfferInbox = ({offerList, acceptAction}) => {
  const renderInbox = () => {
    return _.map(offerList, offer => {
      const offerId = {offerId: offer._id};
      return (
        <div key={offer._id}>
          <h3>Item Offered</h3>
          <p>{offer.itemOffered.name}</p>
          <h3>Description</h3>
          <p>{offer.itemOffered.description}</p>
          <h3>Offer From</h3>
          <p>{offer.offerFrom._id}</p>
          <button onClick={() => acceptAction(offerId)}>Accept</button>
          <button>Deny</button>
        </div>
      )
    });
  }
  return (
    <div>
      <h1>OFFER INBOX</h1>
      {renderInbox()}
    </div>
  );
}

export default OfferInbox
