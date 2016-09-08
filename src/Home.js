import React, { Component } from 'react';


var Rebase = require('re-base');
var base = Rebase.createClass({
  apiKey: "AIzaSyBgXhmd2iRfEP9CaLwTHsLyXDWinn45yAs",
  authDomain: "orlando-demo.firebaseapp.com",
  databaseURL: "https://orlando-demo.firebaseio.com",
});

class Home extends Component {
  constructor() {
    super();
    this.state = {messages: []};
    this.addMessage = this.addMessage.bind(this);
  }
  componentDidMount(){
    base.syncState(`chatList`, {
      context: this,
      state: 'messages',
      asArray: true
    });
  }
  addMessage(event){
    event.preventDefault();
    let newMessage = event.target.elements[0].value;
    this.setState({
      items: this.state.messages.concat([newMessage]) //updates Firebase and the local state
    });
  }
  getMessages(){
    base.fetch('messages', {
      context: this,
      asArray: true,
      then(data){
        console.log(data);
      }
    });
  }
  render() {
    this.getMessages();
    return (
      <div className="form">
        <h2>{this.state.messages}</h2>
        <form onSubmit={this.addMessage}>
          <textarea></textarea>
          <button className="btn btn-success">Add message</button>
        </form>
      </div>
    )
  }
}

export default Home;
