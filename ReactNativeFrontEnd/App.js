import React from 'react';
import styles from './styles';
import Home from './screens/Home';
import { Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
      </View>
    );
  }
};