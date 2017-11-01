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
  TextInput,
  Button
} from 'react-native';

var s = require('../../style');

export default class Contact extends Component<{}> {

  doSomething(){

  }

  render() {
    return (
      <View>
        <Text style={s.heading}>Contact Us</Text>
        <View style={s.viewStyle}>
          <TextInput 
           style={s.textInputStyle}
           placeholder="Enter Email"
          />
          <TextInput 
           style={s.textInputStyle}
           placeholder="Enter Name"
          />
          <TextInput 
           style={s.textInputStyle}
           placeholder="Optional Message"
          />
          <Button
            title="Submit"
            color="#841584"
            onPress={this.doSomething}
          />
        </View>
      </View>
    );
  }
}

