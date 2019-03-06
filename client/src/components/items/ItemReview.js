import _ from 'lodash';
import React from 'react';
import ItemFormFields from './itemFormFields'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/index';

const ItemReview = ({ onCancel, formValues, submitItem }) => {
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
      <button onClick={() => submitItem(formValues)}>
        Submit
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return { formValues: state.form.itemForm.values}
}

export default connect(mapStateToProps, actions)(withRouter(ItemReview));
