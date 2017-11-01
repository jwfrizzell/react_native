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
  Dimensions
} from 'react-native';


import AppNavigator from './app/components/appNavigator/appNavigator';

export default class App extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator 
          navigator={() => this.props.navigation.navigate()} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#cccccc',
    height: Dimensions.get('window').height
  }
});




