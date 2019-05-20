/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import styles from './Styles';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component<{}> {
  render() {
    return <AppContainer />;
  }
}


// const styles = StyleSheet.create({
//   description: {
//     fontSize: 18,
//     textAlign: 'center',
//     color: '#656565',
//     marginTop: 65,
//   },
//   container: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 28,
//     textAlign: 'center',
//     color: '#656565',
//     marginTop: 90,
//     marginLeft: 40,
//     marginRight: 40
//   },
//   picture: {
//     alignSelf: 'center',
//     borderWidth: 0,
//     borderRadius: 20
//   },
//   backgroundPic: {
//     alignSelf: 'center',
//     resizeMode: 'stretch',
//     height: '100%',
//     width: '100%'
//   }
// });
