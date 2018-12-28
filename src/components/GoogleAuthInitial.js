// Initial Auth component - before adding Redux

import React, { Component } from 'react';

class GoogleAuth extends Component {

  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '507880940489-972ssgftqsjvfjm7jg2u09btcjcgf4m7.apps.googleusercontent.com',
        scope: 'email'
      })
      .then(
        () => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({isSignedIn: this.auth.isSignedIn.get() })
          this.auth.isSignedIn.listen(this.onAuthChange)
        }
      )
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get()});
  };

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton = () => {
    if (this.state.isSignedIn === null){
      return null;
    } else if (this.state.isSignedIn) {
    return  (
      <div>
        <button
        className="ui red google button"
        onClick={this.onSignOutClick}
        >
          <i className="google icon"/>
          Sign Out
        </button>
      </div>
      )
    } else {
    return (
      <div>
        <button
        className="ui red google button"
        onClick={this.onSignInClick}
        >
          <i className="google icon"/>
          Sign In Wth Google
        </button>
      </div>)
    }
  }

  render(){
    return(
      <div>
        {this.renderAuthButton()}

      </div>
    )
  }
}

export default GoogleAuthInitial;
