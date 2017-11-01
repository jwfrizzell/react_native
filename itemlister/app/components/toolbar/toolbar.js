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
  StatusBar
} from 'react-native';

const styles = require('../../style.js')

export default class Toolbar extends Component<{}> {

  render() {
    

    return (
      <View>
        <StatusBar 
          backgroundColor='coral'
          barStyle="light-content"
        />
        <View style={styles.navbar}>
          <Text style={styles.navbartitle}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}