import React from 'react';
import { Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';

import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

import { Route } from 'react-router';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path = "/signup" component = {SignUpFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
    </Switch>
  </div>
)



export default App;
