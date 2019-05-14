import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.qid);
  }

  render() {
    const data = {
      labels: [
        `${this.props.question.option1}`,
        `${this.props.question.option2}`
      ],
      datasets: [{
        data: [`${this.props.question.answer_a}`, `${this.props.question.answer_b}`],
        backgroundColor: [
          '#EF6C33',
          '#ABDFF1'
        ],
        hoverBackgroundColor: [
          '#EF6C33',
          '#ABDFF1'
        ]
      }]
    };
    return (
      <>
        <h1>Hello</h1>
        <Doughnut data={data} />
      </>
    )
  }

}

export default QuestionAnswer;