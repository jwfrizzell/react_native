import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';


export default class LanguageSelect extends Component<{}> {
  render() {
    return (
      <Picker 
        selectedValue={this.props.language}
        onValueChange={(lang) => {this.props.onSelect(lang)}}
      >
        <Picker.Item label="Russian" value="ru"/>
        <Picker.Item label="Spanish" value="es"/>
        <Picker.Item label="French" value="fr"/>
        <Picker.Item label="Chinese" value="zh"/>
        <Picker.Item label="German" value="de"/>
        <Picker.Item label="Italian" value="it"/>
        <Picker.Item label="Japanese" value="ja"/>
      </Picker>
    );
  }
}

const styles = StyleSheet.create({

});
