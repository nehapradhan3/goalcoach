import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route, browserHistory} from 'react-router';
import {firebaseApp} from './firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

firebaseApp.auth().onAuthStateChanged(user=>{
  if (user){
    console.log('user has signed in or up',user);
  }else {
    console.log('user is signed out or still needs to sign in');
  }
})

ReactDOM.render(
  <Router path="/" history={browserHistory}>
  <Router path="/app" component={App} />
  <Router path="/signin" component={SignIn} />
  <Router path="/signup" component={SignUp} />


  </Router>,document.getElementById('root')
)
