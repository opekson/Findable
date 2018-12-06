import React from 'react';
import styles from '../styles';
import RootNavigator from '../navigation/RootNavigator';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase';
firebase.initializeApp(firebaseConfig);

import { Text, View, TouchableOpacity, Alert, Image} from 'react-native';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.props.dispatch(login(user))
      }
    });
  }

  login = async() => {
    try {
      const { type, token } = 
      await Expo.Facebook.logInWithReadPermissionsAsync('352852475279355', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        const credential = await firebase.auth.FacebookAuthProvider.credential(token);

        firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
          Alert.alert("Try Again")
        });
      } 
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  
  render() {
    if(this.props.loggedIn){
      return(
        <RootNavigator/>
      )
    } else {
      return (
        <View style={[styles.container,styles.center, styles.background, {justifyContent: 'flex-start'}]}>
          <Text style={[styles.bold,{ marginRight: 20, marginLeft: 20, marginTop: 100, height: 50, fontSize: 25, width: 'auto'}]}>WELCOME TO FINDABLE
          </Text>
          <Text style={[styles.bold, {fontSize: 20}]}> FIND . MATCH . INTERACT </Text>
          <Image style={{ marginTop: 50} } source={require('../assets/findable-icon.png')}/>
          <TouchableOpacity style={[styles.login, {marginTop: 110}]} onPress={this.login.bind(this)}>
            <Text style={styles.facebook}>LOGIN WITH FACEBOOK </Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
};

export default connect(mapStateToProps)(Login);