import React from 'react';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.displayQuestion = this.displayQuestion.bind(this);
  }

  displayQuestion() {
    if (this.props.question.questionType === "wyr") {
      return (
        <div>
          <h2>Would You Rather</h2>
          <div>
            <h4>{this.props.question.option1}</h4>
          </div>
          <div>
            <h4>{this.props.question.option2}</h4>
          </div>
          <div>
            <h4>Upvotes: {this.props.question.upvote}</h4>
            <h4>Downvotes: {this.props.question.downvote}</h4>
          </div>
        </div>
      )
    } else if (this.props.question.questionType==="RFDB") {
      return (
        <div>
          <div>
            <h2>{this.props.question.option1}</h2>
          </div>
          <div>
            <h4>Red Flag</h4>
          </div>
          <div>
            <h4>Deal Breaker</h4>
          </div>
        </div>
      )
    }
  }

  render() { 
    return (
      <div>
        { this.displayQuestion() }
      </div>
    );
  }
}

export default QuestionDetail;