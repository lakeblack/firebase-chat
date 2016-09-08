import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

var Rebase = require('re-base');
var base = Rebase.createClass({
  apiKey: "AIzaSyBgXhmd2iRfEP9CaLwTHsLyXDWinn45yAs",
  authDomain: "orlando-demo.firebaseapp.com",
  databaseURL: "https://orlando-demo.firebaseio.com",
});

class App extends Component {
  constructor() {
    super();
    this.state = {login: true};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let email = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    if (this.state.login) {
      base.authWithPassword({email, password}, this.authHandler);
    } else {
      this.createUser(email, password);
    }
  }

  authHandler(error, authData) {
    if(error){
      console.log(error);
    } else {
      //change route to /home
      this.context.router.push('/home');
      console.log(authData);
    }
  }

  toggleLogin() {
    this.setState({login: !this.state.login});
  }

  createUser(email, password) {
    base.createUser({email, password}, function(error, authData) {
      console.log(authData);
    });
  }


  render() {
    return (
      <div className="App">
        <Form
          handleSubmit={this.handleSubmit}
          login={this.state.login}
          toggleLogin={this.toggleLogin.bind(this)}
          />
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {router: PropTypes.object.isRequired};

export default App;
