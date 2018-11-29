import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import TabNavigator from "./TabNavigator";

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
  },
);

class RootNavigator extends Component {
  render() {
    return (
      <RootStackNavigator/>
    )
  }
}

 export default RootNavigator;
