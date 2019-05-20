import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

import App from "./App";
import styles from './Styles';

class HomeScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View>
        <Text style={styles.title}> Nice to meet you. </Text>
        <Text>  </Text>
        <Image source={require('./images/cat.jpg')} style={styles.picture} />
        <Text>  </Text>
        <Button color='#087c75' title="Meow-Meow?" onPress={() => this.props.navigation.push('Details')}/>
      </View>
    );
  }
}

export default HomeScreen;
