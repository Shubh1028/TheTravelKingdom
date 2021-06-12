import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import HomePage from './component/HomePage';
import LoginPage from './component/LoginPage';
import SignUp from './component/SignUp';
import StatePage from './component/StatePage';
import DestinationDetail from './component/DestinationDetail';
import Header from './component/Header';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';
import Package from './component/Package';
import DestinationListFilter from './component/DestinationListfiter';
import DestinationForm from './component/DestinationForm';
import PackageForm from './component/PackageForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './component/UserProfile';
import Head from './component2/Head'

const hist = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Router history={hist}>
              <Header/>
              <Switch>
              <Route path="/" exact component={HomePage} />
                <Route path="/Login" component={LoginPage} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/UserProfile" component={UserProfile} />
                <Route path="/State" component={StatePage} />
                <Route path="/Destination/:id" component={DestinationDetail} />
                <Route path="/Aboutus" component={AboutUs} />
                <Route path="/Package" component={Package} />
                <Route path="/DestinationForm" component={DestinationForm} />
                <Route path="/PackageForm" component={PackageForm} />
                <Route path="/DestinationListFilter" component={DestinationListFilter} />
                <Route path="*" component={HomePage} />
              </Switch>
              {/* <Footer/> */}
            </Router>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

