import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import ItemNew from './items/ItemNew';
import MarketplacePage from './marketplace/MarketplacePage';
import ItemPage from './items/ItemPage';
import UserProfilePage from './profile/UserProfilePage';
import ItemInventory from './items/ItemInventory';
import TransactionBox from './transaction/TransactionBox';
import TransactionPage from './transaction/TransactionPage';

const BrowseProfilePage = () => <div>Browse Profile Page</div>
//const TransactionPage = () => <div>Transaction Page</div>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getTransactions();
  }

  render() {

    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/items/new" component={ItemNew} />
            <Route path="/marketplace" component={MarketplacePage} />
            <Route path="/profile" component={UserProfilePage} />
            <Route path="/browse" component={BrowseProfilePage} />
            <Route path="/transaction" component={TransactionBox} />
            <Route path="/item/:itemId" component={ItemPage} />
            <Route path="/transaction/:transactionId" component={TransactionPage} />
            <Route path="/inventory" component={ItemInventory}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
