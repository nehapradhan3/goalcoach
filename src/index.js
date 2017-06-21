import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route, browserHistory} from 'react-router';
import {firebaseApp} from './firebase';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import {logUser} from './actions';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer)
firebaseApp.auth().onAuthStateChanged(user=>{
  if (user){
    console.log('user has signed in or up',user);
    const {email}=user;
    store.dispatch(logUser(email));
    browserHistory.push('/app');
  }else {
    console.log('user is signed out or still needs to sign in');
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
  <Router path="/" history={browserHistory}>
  <Router path="/app" component={App} />
  <Router path="/signin" component={SignIn} />
  <Router path="/signup" component={SignUp} />


  </Router>
  </Provider>,document.getElementById('root')
)
