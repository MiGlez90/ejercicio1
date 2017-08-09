import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';


class App extends Component {
  constructor(){
      super();
      this.state = {
        user: null
      };
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged( user => {
      this.setState({ user });
    });
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
     .then(result => console.log(`${result.user.email} ha iniciado sesión`))
     .catch(error => console.log(`Error ${error.code} : ${error.message}`));
  }

  handleLogout(){
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha cerrado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  renderLoginButton(){
    //If user is logged in
      if( this.state.user ){        
        return(
          <div>              
            <div className="App-divpic">          
              <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
            </div>
            <div className="App-welcome">            
              <p id="welcome"><b>Bienvenido(a) {this.state.user.displayName} !</b></p>
              <button onClick={this.handleLogout}>Log out</button>  
            </div>
                      
          </div>
        );
      }else{ 
        return(
          <div className="App-login">
            <button id="login-btn" onClick={this.handleAuth}>Log in</button>
          </div>
        );   
      }
    //else
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" title="React Logo" />
          <h1>Testing Google Firebase with React</h1>
        </div>        
        
        {this.renderLoginButton()}
      </div>
    );
  }
}

export default App;
