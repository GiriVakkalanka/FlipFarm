import React from 'react';
import ItemFormFields from './itemFormFields'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ItemReview = ({onCancel, formValues }) => {
  return <div>test</div>
}

function mapStateToProps(state) {
  return { formValues: state.form.itemForm.values}
}

export default connect(mapStateToProps)(withRouter(ItemReview));
