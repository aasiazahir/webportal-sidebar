import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './components/MainView/Home/Home';
import Teacher from './components/MainView/Teacher/Teacher';
import Student from './components/MainView/Student/Student';
import Details from './components/MainView/Student/Details/Details';
import Signin from './components/MainView/Signin/Signin';
import Signup from './components/MainView/Signup/Signup';
import Contacts from './components/MainView/Contacts/Contacts';

const Routes = () => {
  return (
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/teacher' component={Teacher} />
    <Route exact path='/student' component={Student} />
    <Route exact path='/student/:details' component={Details} />
    <Route exact path='/signin' component={Signin} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/contacts' component={Contacts} />
  </Switch>
  )
}

export default Routes;