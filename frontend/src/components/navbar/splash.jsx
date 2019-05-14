import React from 'react';

class Splash extends React.Component {

  requestQ(type) {
    // this.props.history.push(`/#/questions/${type}`)
  }

  render() {
    return (
      <>
        <div>
          <div>
            <div onClick={this.requestQ("wyr")}>
              Would You Rather
          </div>
            <div onClick={this.requestQ("rfdb")}>
              Red Flag or Dealbreaker
          </div>
          </div>
        </div>
      </>
    )
  }
};

export default Splash;