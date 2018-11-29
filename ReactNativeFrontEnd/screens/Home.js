import React from 'react';
import styles from '../styles';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

import { Text, View, Alert } from 'react-native';

class Home extends React.Component {
  state = {}

  componentWillMount() {
    this.props.dispatch(login('dynamic'))
    this.login()
  }

  login = async() => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Expo.Facebook.logInWithReadPermissionsAsync('352852475279355', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View>
        <Text>{this.props.user}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(Home);

