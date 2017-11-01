import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class TranslateOutput extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.translation}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{

  },
  text:{
    fontSize: 23,
    textAlign: 'center',
    color: '#656565'
  }
});
