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
        <div>
          <h1>Hello, {this.props.currentUser.username}</h1>
          <button onClick = {this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}>Sign Up</Link>
          <Link to={'/login'}>Log In</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Link to="/"><h1>Social Q's</h1></Link>
        { this.getLinks() }
      </div>
    )
  }
}

export default NavBar;