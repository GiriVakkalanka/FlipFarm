import _ from 'lodash';
import React from 'react';
import ItemFormFields from './itemFormFields'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ItemReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(ItemFormFields, ({ name, label }) => {
    return (
      <div key={label}>
        <label>
          {label}
        </label>
        <div>
          {formValues[name]}
        </div>
      </div>
    )
  })
  return (
    <div>
    {reviewFields}
    <button onClick={onCancel}>
      Cancel
    </button>
    </div>
  )
}

function mapStateToProps(state) {
  return { formValues: state.form.itemForm.values}
}

export default connect(mapStateToProps)(withRouter(ItemReview));
