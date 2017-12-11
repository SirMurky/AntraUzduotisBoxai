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
    
  

  render() {
    return (
      
      <View style={styles.container}>
              <View style={styles.flexbox1}>
              <TouchableOpacity onPress = {() => this.spalvaKeiciasi()}>
              <Text style = {styles.button}>
                 Button1
              </Text>
           </TouchableOpacity>
  
           <TouchableOpacity onPress = {()=> {this.spalvaKeiciasi1()}}>
           <Text style = {styles.button}>
              Button2
           </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {()=> {this.spalvaKeiciasi2()}}>
        <Text style = {styles.button}>
           Button3
        </Text>
     </TouchableOpacity>

     <TouchableOpacity onPress = {()=> {this.spalvaKeiciasi3()}}>
     <Text style = {styles.button}>
        Button4
     </Text>
      </TouchableOpacity>

              </View>
              <View style={styles.flexbox2}>
              <Text style={[styles.redBox, {color: this.state.spalvaA},{backgroundColor: this.state.spalvaE}]}>Box1</Text>
              <Text style={[styles.redBox, {color: this.state.spalvaB},{backgroundColor: this.state.spalvaE}]}>Box2</Text>
              <Text style={[styles.redBox, {color: this.state.spalvaC},{backgroundColor: this.state.spalvaE}]}>Box3</Text>
              <Text style={[styles.redBox, {color: this.state.spalvaD},{backgroundColor: this.state.spalvaE}]}>Box4</Text>
              </View>
      </View>
      

    );
  }
}
