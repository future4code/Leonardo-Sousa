import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import TripDetailsPage from './TripDetailsPage';
import Header from './Header';
import SubscriptionPage from './SubscriptionPage';
import Footer from './Footer';
import ManageTripsPage from './ManageTripsPage';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header/>
          <HomePage/>
          <Footer/>
        </Route>
        <Route exact path="/LoginPage">
          <Header/>
          <LoginPage/>
          <Footer/>
        </Route>
        <Route exact path="/SubscriptionPage">
          <Header/>
          <SubscriptionPage/>
          <Footer/>
        </Route>
        <Route exact path="/ManageTripsPage">
          <Header/>
          <ManageTripsPage/>
          <Footer/>
        </Route>
        <Route exact path="/TripDetailPage">
          <TripDetailsPage/>
        </Route>
        <Route path="/">
          <h1>Página não encontrada...</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
