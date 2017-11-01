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
  View
} from 'react-native';

export default class Toolbar extends Component<{}> {

  static defaultProps = {
    title: 'BookFinder'
  }

  render() {
    return (
      <View style={styles.toolbarView}>
        <Text style={styles.toolbarText}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbarView: {
    backgroundColor: '#000000',
    padding: 10
  },
  toolbarText: {
    color: '#ffffff',
    textAlign: 'center'
  }
});
