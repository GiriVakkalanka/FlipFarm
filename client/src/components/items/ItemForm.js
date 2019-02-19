import React, { Component } from 'react';
import FormField from './FormField';
import _ from 'lodash';
import {reduxForm, Field} from 'redux-form';

class ItemForm extends Component {
  renderFields(){
    const formFieldNames = [
      {label: 'Name', name: 'name'},
      {label: 'Description', name: 'description'}
    ];

    return _.map(formFieldNames, ({label, name}) => {
      return (
        <Field
          key={name}
          component={FormField}
          type="text"
          label={label}
          name={name}
        />
      )
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(() => this.props.onItemSubmit)}>
          {this.renderFields()}
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'itemForm',
  destroyOnUnmount: false
})(ItemForm);
