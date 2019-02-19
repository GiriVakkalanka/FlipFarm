import React, { Component } from 'react';
import ItemForm from './ItemForm';
import ItemReview from './ItemReview';

class ItemNew extends Component {
  state = { showFormReview: false };

  renderNewItemWizard() {
    if (this.state.showFormReview) {
      return (
        <ItemReview
          onCancel= {() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <ItemForm
        onItemSubmit= {() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        Item New
        <ItemForm/>
        <ItemReview/>
      </div>
    )
  }

}

export default ItemNew;
