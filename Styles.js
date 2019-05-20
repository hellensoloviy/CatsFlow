import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  bottomDescription: {
    fontSize: 18,
    textAlign: 'center',
    color: '#087c75'
  },
  textContainer: {
    marginTop: 440,
    marginLeft: 40,
    marginRight: 40,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#656565',
    marginTop: 90,
    marginLeft: 40,
    marginRight: 40
  },
  picture: {
    alignSelf: 'center',
    borderWidth: 0,
    borderRadius: 20
  },
  backgroundPic: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    height: '100%',
    width: '100%'
  }
});
