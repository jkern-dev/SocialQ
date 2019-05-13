import React from 'react';
import { Switch } from 'react-router-dom';
// always exist on page
import NavBarContainer from './navbar/navbar_container';

// individual pages
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import QuestionCreateContainer from './questions/question_create_container';
import QuestionsContainer from './questions/questions_container';
import QuestionAnswerContainer from './questions/question_answers_container';

import { Route } from 'react-router';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <Route exact path = "/signup" component = {SignUpFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path = "/questions" component={QuestionsContainer} />
      <Route exact path = "/new_question" component={QuestionCreateContainer} />
      <Route exact path = "/questions/:qid" component={QuestionAnswerContainer} />
    </Switch>
  </div>
)



export default App;
