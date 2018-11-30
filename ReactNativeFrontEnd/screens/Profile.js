import React from 'react';
import styles from '../styles';
import { connect } from 'react-redux';
import { Text, View, Image } from 'react-native';

class Profile extends React.Component {
  state = {}

  componentWillMount() {}

  render() {
    return (
      <View>
        <Text>{this.props.user.name}</Text>
        <Image style={{ width: 100, height: 100 }}
          source={{uri: this.props.user.photoUrl}} />
      </View>
    )
  }
};

function mapStateToProps(state) {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(Profile);