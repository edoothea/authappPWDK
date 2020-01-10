import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner}  from './src/components/common';
import LoginForm from './src/components/LoginForm';

import firebase from 'firebase'



class App extends Component {
  state = {loggedIn: null}

  componentWillMount () {
    const firebaseConfig = {
      apiKey: "AIzaSyDLvnjmkmIB5L2Rtbyzz71xDtZJ8NSesLE",
      authDomain: "authapppwdk.firebaseapp.com",
      databaseURL: "https://authapppwdk.firebaseio.com",
      projectId: "authapppwdk",
      storageBucket: "authapppwdk.appspot.com",
      messagingSenderId: "996850409433",
      appId: "1:996850409433:web:b29ebbb59e8c14ad9743c8",
      measurementId: "G-YKVBW9RM57"
    };
    if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState ({ loggedIn : true})
      } else {
        this.setState({ loggedIn : false})
      }
    });
    }
  }

  renderContent() {
    switch (this.state.loggedIn){
      case true:
        return(
          <Button onPress ={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
  
      dafault:
        return  <Spinner />
  }}

  render (){
    return (
      <View>
        <Header title='Authentication' />
        {this.renderContent()}
      </View>
    )
  };
}

export default App;