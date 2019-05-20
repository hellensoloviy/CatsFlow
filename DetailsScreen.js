import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';

import App from "./App";
import styles from './Styles';

class DetailsScreen extends React.Component<{}> {
  render() {
    return (
      <View>
          <ImageBackground source={require('./images/cat-flowers.jpg')} style={styles.backgroundPic}>
            <View style={styles.textContainer}>
              <Text style={styles.bottomDescription}> Nothing more to see here. </Text>
              <Text style={styles.bottomDescription}> It's just a demo after all. Meow. </Text>
              <Text style={styles.bottomDescription}> Meow. :3 </Text>
            </View>
          </ImageBackground>
      </View>
    );
  }
}

export default DetailsScreen
