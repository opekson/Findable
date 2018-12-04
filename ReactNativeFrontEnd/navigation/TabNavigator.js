import React from 'react';
import styles from '../styles';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Image } from 'react-native';

export default createMaterialTopTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: <Ionicons style={{marginTop: 40, width: 50, height: 50}} color={'#000'} name={'ios-person'} size={50}/>
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: <Image style={{marginTop: 40, width: 60, height: 60}} source={require('../assets/findable-icon.png')} />
      }
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: <Ionicons style={{marginTop: 40, width: 50, height: 50}}  color={'#000'} name={'ios-chatbubbles' } size={50}/>
      },
    }
  },

  {
    navigationOptions:{
      header: null
    },
    tabBarPosition: 'top',
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: false,
    showLabel: false,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#FFC966',
      inactiveTintColor: 'gray',
      style: {
        height: 80,
        backgroundColor: '#FFC966'
      },
    }
  }
);