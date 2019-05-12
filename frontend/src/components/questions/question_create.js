import React from 'react';

class QuestionCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: "",
      option2: "",
      questionType: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let question = {
      option1: this.state.option1,
      option2: this.state.option2,
      questionType: this.state.questionType
    };

    this.props.composeQuestion(question);
    this.setState({
      option1: "",
      option2: "",
      questionType: ""
    });
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type="textarea" 
            value = {this.state.option1}
            onChange = {this.update("option1")}
            placeholder="Answer Choice 1"
            />
            <br />
          <input type="textarea"
            value={this.state.option2}
            onChange={this.update("option2")}
            placeholder="Answer Choice 2"
          />
          <br />
          <input type="text"
            value = {this.state.questionType}
            onChange = {this.update("questionType")}
            placeholder = "Question Type"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default QuestionCreate;