import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import{ BrowserRouter } from 'react-router-dom';


import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase';

import {composeWithDevTools} from 'redux-devtools-extension'


const firebaseConfig = {
  apiKey: "AIzaSyDVo2YBzMozvvwsSKnnVdfHgmQDdq-U4A8",
  authDomain: "boot-camp-bc881.firebaseapp.com",
  databaseURL: "https://boot-camp-bc881.firebaseio.com",
  projectId: "boot-camp-bc881",
  storageBucket: "boot-camp-bc881.appspot.com",
  messagingSenderId: "732311412196",
  appId: "1:732311412196:web:e81515d3c72ea1a52ffbf1"
};

firebase.initializeApp(firebaseConfig);


// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps} >
      <BrowserRouter> 
        <App/>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
