import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import jwt_decode from 'jwt-decode';
import { Switch } from 'react-router-dom';

import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import './App.css';

import PrivateRoute from './components/common/PrivateRoute';

import Login from './components/auth/Login';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './components/layout/Dashboard';
import Rectangle from './components/layout/Rectangle';

import AnimalRegistration from './components/forms/AnimalRegistration';
import AnimalInsemination from './components/forms/AnimalInsemination';
import CalfRegister from './components/forms/CalfRegister';
import CalvingRegister from './components/forms/CalvingRegister';
import MilkRecordingRegister from './components/forms/MilkRecordingRegister';
import EndPage from './components/forms/EndPage';
import StartPage from './components/forms/StartPage';

//check for token
if (localStorage.jwtToken) {
  console.log(localStorage.jwtToken)
  //set auth token to header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token to get user id ect
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and authenticated
  store.dispatch(setCurrentUser(decoded));

  //set for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //TODO: Clear current Profile

    //Redirect to login 
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Rectangle />
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/animalRegistration" component={AnimalRegistration} />
            </Switch>

            <Switch>
              <PrivateRoute exact path="/animalInsemination" component={AnimalInsemination} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/calfRegister" component={CalfRegister} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/calvingRegister" component={CalvingRegister} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/milkRecordingRegister" component={MilkRecordingRegister} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/start" component={StartPage} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/end" component={EndPage} />
            </Switch>
            <Rectangle />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
