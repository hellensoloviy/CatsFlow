import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

import App from "./App";
import styles from './Styles';

class HomeScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>
        Meow?
        </Text>
        <Image source={require('./images/cat.jpg')} style={styles.picture} />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('Details')}/>
      </View>

    );
  }
}

export default HomeScreen;
