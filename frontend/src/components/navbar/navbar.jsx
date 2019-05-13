import React from 'react';
import { Link } from 'react-router-dom';

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
          <div className="link-buttons">
              <h1>Hello, {this.props.currentUser.username}</h1>
              <button onClick = {this.logoutUser} className="log-out">Logout</button>
              <Link to={'/new_question'}>Submit A Question</Link>
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
      <div className="navbar-container">
        <div className="navbar-header">
          <div className="left-navbar"></div>
          <h1 className="app-name">Social Q's</h1>
          { this.getLinks() }
        </div>
      </div> 
    )
  }
}

export default NavBar;