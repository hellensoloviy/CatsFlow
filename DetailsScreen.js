import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';

import App from "./App";
import styles from './Styles';

class DetailsScreen extends React.Component<{}> {
  render() {
    return (
      <View>
          <ImageBackground source={require('./images/cat-flowers.jpg')} style={styles.backgroundPic}>
          </ImageBackground>
      </View>
    );
  }
}

export default DetailsScreen
