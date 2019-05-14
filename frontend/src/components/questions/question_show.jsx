import React from 'react';
import {Link} from 'react-router-dom';

class QuestionShow extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     upvote: this.props.question.upvote, 
        //     downvote: this.props.question.downvote 
        // }
        this.state = {
            upvote: this.props.question.upvote ,
            downvote: this.props.question.downvote, 
            answer_a: this.props.question.answer_a,
            answer_b: this.props.question.answer_b,
            id: this.props.match.params.qid
        };
        this.handleDownvote = this.handleDownvote.bind(this);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleOption1 = this.handleOption1.bind(this);
        this.handleOption2 = this.handleOption2.bind(this);
    }   

    componentDidMount(){
        this.props.fetchQuestion(this.props.match.params.qid)
        
        .then(({question}) => {
            this.setState({
            upvote: question.data.upvote,
            downvote: question.data.downvote, 
            answer_a: question.data.answer_a, 
            answer_b: question.data.answer_b
        })})
    }

    handleUpvote(e){
        e.preventDefault();
        this.setState({
            upvote: (this.state.upvote + 1)
        })
        this.props.updateQuestion(this.state)
    }

    handleDownvote(e){
        e.preventDefault();
        this.setState({
            downvote: (this.state.downvote + 1)
        })
        this.props.updateQuestion(this.state)
    }

    handleOption1(e){
        e.preventDefault();
        this.setState({
            answer_a: (this.state.answer_a + 1)
        })
        this.props.updateQuestion(this.state)
    }

    handleOption2(e){
        e.preventDefault();
        this.setState({
            answer_b: (this.state.answer_b + 1)
        })
        this.props.updateQuestion(this.state)
    }


    displayQuestion() {
        if (this.props.question.questionType === "wyr") {
            return (
                <div className="question-container">
                    <h2 className="wyr-head">Would You Rather</h2>
                    <Link to={`/questions/${this.props.question._id}`}>Blah blah blah</Link>
                    <div className="answer-button" onClick={this.handleOption1}>
                        <h4>{this.props.question.option1}</h4>
                    </div>
                    <div className="answer-button" onClick={this.handleOption2}>
                        <h4>{this.props.question.option2}</h4>
                    </div>

                    <div className="upvote-button" onClick={this.handleUpvote}>
                        Upvote HERE
                    </div>

                    <div className="downvote-button" onClick={this.handleDownvote}>
                        DOWNVOTE HERE
                    </div>

                    <div>
                        <h4>{this.props.question.option1}: {this.props.question.answer_a}</h4>
                        <h4>{this.props.question.option2}: {this.props.question.answer_b}</h4>
                            upvote: {this.props.question.upvote} <br/>
                            downvote: {this.props.question.downvote}
                    </div>
                </div>
            )
        } else if (this.props.question.questionType === "RFDB") {
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

    render(){
        return (
            <div>
                {this.displayQuestion()}
            </div>
        );
    }
}

export default QuestionShow;