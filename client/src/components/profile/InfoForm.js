import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoFormField from './InfoFormField';
import { Link } from 'react-router-dom'
import _ from 'lodash';
import {reduxForm, Field} from 'redux-form';

class InfoForm extends Component {
  renderFields(){
    const formFieldNames = [
      {label: 'Name', name: 'name'},
      {label: 'Address One', name: 'addressOne'},
      {label: 'Address Two', name: 'addressTwo'},
      {label: 'City', name: 'city'},
      {label: 'State', name: 'state'},
      {label: 'Zip', name: 'zip'},
      {label: 'Phone', name: 'phone'}
    ];

    return _.map(formFieldNames, ({label, name}) => {
      return (
        <Field
          key={name}
          component={InfoFormField}
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
        <form onSubmit={this.props.handleSubmit(() => console.log('test'))}>
          {this.renderFields()}
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

// export default reduxForm({
//   form: 'infoForm',
//   destroyOnUnmount: false
// })(InfoForm);

function mapStateToProps(state, props) {
  return { initialValues: props.defaultInfoValues }
}

export default connect(
  mapStateToProps
)(reduxForm({
   form: 'infoForm',
  enableReinitialize: true
})(InfoForm))
