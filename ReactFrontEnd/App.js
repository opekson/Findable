import React, { Component } from 'react';
import styles from "./styles"
import RootNavigator from "./navigation/RootNavigator";

import { Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
