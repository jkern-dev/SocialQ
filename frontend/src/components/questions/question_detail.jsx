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
          <h2 className="wyr-head">Would You Rather</h2>
          <div>
            <h4>{this.props.question.option1}</h4>
          </div>
          <div>
            <h4>{this.props.question.option2}</h4>
          </div>
          <div>
            <h4>{this.props.question.option1}: {this.props.question.answer_a}</h4>
            <h4>{this.props.question.option2}: {this.props.question.answer_b}</h4>
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
            <h4 className="rfdb-button">Red Flag</h4>
          </div>
          <div>
            <h4 className="rfdb-button">Deal Breaker</h4>
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