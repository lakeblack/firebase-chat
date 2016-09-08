import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form">
        {this.props.login ? <h2>React firebase chat</h2> : null}
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" placeholder="Email Address"/>
          <input type="text" placeholder="Password"/>
          <button type="submit" className="btn btn-primary">Login</button>
          <button onClick={this.props.toggleLogin} className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Form;
