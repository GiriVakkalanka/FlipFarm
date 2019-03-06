import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import ItemNew from './items/ItemNew';

const MarketplacePage = () => <div>Marketplace Page</div>
const UserProfilePage = () => <div>User Profile Page</div>
const BrowseProfilePage = () => <div>Browse Profile Page</div>
const TransactionPage = () => <div>Transaction Page</div>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
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
            <Route path="/transaction" component={TransactionPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
