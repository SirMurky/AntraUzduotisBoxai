/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
 
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


var spalva1 = 'green';
var spalva2 = 'white';
var spalva3 = 'blue';
var spalva4 = 'yellow';
export default class App extends Component<{}> {
  constructor(){
    super() 
      this.state =
      {
       spalvaA : 'red',
       spalvaB : 'red',
       spalvaC : 'red',
       spalvaD : 'red',
	   spalvaE: 'green'
      }
    }
    spalvaKeiciasi()
    {
      var backgroundColor = spalva1;
      this.setState({spalvaA: backgroundColor})
    }
    spalvaKeiciasi1()
    {
      var backgroundColor = spalva2;
      this.setState({spalvaB: backgroundColor})
    }
    spalvaKeiciasi2()
    {
      var backgroundColor = spalva3;
      this.setState({spalvaC: backgroundColor})
    }
    spalvaKeiciasi3()
    {
      var backgroundColor = spalva4;
      this.setState({spalvaD: backgroundColor})
    }
