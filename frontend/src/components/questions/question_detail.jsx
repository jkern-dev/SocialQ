import React from 'react';

class QuestionDetail extends React.Component {
  render(){ 
    return (
      <div>
        <h1>{this.props.option1}</h1>
        <h1>{this.props.option2}</h1>
      </div>
    );
  }
}

export default QuestionDetail;