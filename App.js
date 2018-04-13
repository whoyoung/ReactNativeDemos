/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ReactNativeSvg from './demos/ReactNativeSvg'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'RNHome',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Button
          title="React-Native-Svg demo"
          onPress={() => this.props.navigation.navigate('ReactNativeSvg')}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    ReactNativeSvg: {
      screen: ReactNativeSvg,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class ReactNativeDemo extends Component {
  render() {
    return <RootStack />;
  }
}
