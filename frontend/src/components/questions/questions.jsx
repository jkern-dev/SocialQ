import React from 'react';
import { withRouter } from 'react-router-dom';
import QuestionDetail from './question_detail';

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      questions: []
    }
  }

  componentWillMount() {
    this.props.fetchQuestions();
  }

  componentWillReceiveProps(newState) {
    this.setState({questions: newState.questions});
  }

  render(){
    if (this.state.questions.length === 0) {
      return (<div>There are no questions</div>)
    } else {
      return (
        <div>
          <h2>All Questions</h2>
          {this.state.questions.map(question => (
            <QuestionDetail 
              question = {question}
              />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Questions);