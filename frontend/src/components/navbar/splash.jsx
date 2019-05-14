import React from 'react';
import {withRouter} from 'react-router-dom'

class Splash extends React.Component {

  requestQ(type) {
    // this.props.history.push(`/#/questions/${type}`)
  }

  render() {

    const sessionPage = () => {
      return null 
    };

    const notSessionPage = () => {
    return (
      <>
      <div className="question-button-background">
        <div className="question-button-container">
          <div className="button-container">
            <div className="left-button"> 
              <div onClick={this.requestQ("wyr")} className="wyr-button">
                Would You <br/> Rather
            </div>
            </div>
            <div className="right-button">
              <div onClick={this.requestQ("rfdb")} className="rfdb-button">
                Red Flag or <br/> Dealbreaker
            </div>
            </div>
          </div>
        </div>
      </div> 
      </>
    )
    };

    return(

      (this.props.location.pathname === "/login" || this.props.location.pathname === "/signup") ?
      sessionPage() : notSessionPage()
    )

  }
};

export default withRouter(Splash);