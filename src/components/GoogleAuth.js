import React, { Component } from 'react';

class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: 507880940489-972ssgftqsjvfjm7jg2u09btcjcgf4m7.apps.googleusercontent.com,
        scope: 'email'

      })
    })
  }


  render(){
    return(
      <div>
        Google Auth
      </div>
    )
  }
}

export default GoogleAuth;
