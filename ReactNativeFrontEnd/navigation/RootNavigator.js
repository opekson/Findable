import React from 'react';
import styles from '../styles';
import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import Chat from '../screens/Chat';

const RootStackNavigator =  createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    },
    Chat:{
      screen: Chat
    }
  }
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator/>
  }
}