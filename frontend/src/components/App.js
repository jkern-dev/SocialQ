import React from 'react';
import SignUpFormContainer from './session/signup_form_container';

import { Route } from 'react-router';

const App = () => (
  <div>
    <Route exact path = "/signup" component = {SignUpFormContainer} />
  </div>
)



export default App;
