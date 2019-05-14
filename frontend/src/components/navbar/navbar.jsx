import React from 'react';
import { Link } from 'react-router-dom';
import Splash from './splash';

class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
          <div className="link-buttons-logged-in">
              <h1 className="greeting-logged-in">Hello, {this.props.currentUser.username}</h1>
              <Link to={'/new_question'} className="sign-up">Submit A Question</Link>
              <button onClick={this.logoutUser} className="log-out">Logout</button>
          </div>
      );
    } else {
      return (
          <div className="link-buttons">
            <Link to={'/signup'} className="sign-up">Sign Up</Link>
            <Link to={'/login'} className="log-in">Log In</Link>
          </div>
      );
    }
  }

  render() {
    return (
      <>
        <div className="navbar-container">
          <div className="navbar-header">
            <h1 className="app-name">Social Q's</h1>
            { this.getLinks() }
          </div>
        </div> 
            <Splash />
      </>
    )
  }
}

export default NavBar;