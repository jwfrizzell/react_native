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

import LanguageSelect from './app/components/language_select/language_select';
import TranslateInput from './app/components/translate_input/translate_input';
import TranslateOutput from './app/components/translate_output/translate_output';

export default class App extends Component<{}> {
  constructor(){
    super();
    this.state = {
      translateText: '',
      language: 'ru'
    }
  }

  selectLanguage(lang){
    this.setState({
      language: lang
    }, () => {console.log("Language Switched: " + lang)});
  }

  translateText(text){
    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?' + 
      'key=trnsl.1.1.20171101T183047Z.fe0284d7fb0c00b2.da77e6fc11345b59e80cdab68eeca9259b4f174a' + 
      '&lang=' + this.state.language + 
      '&text=' + text
    ).then((response) => {
      let res = JSON.parse(response._bodyText);
      this.setState({translateText: res.text});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LanguageSelect language={this.state.language} onSelect={this.selectLanguage.bind(this)}/>
        <TranslateInput onSubmit={this.translateText.bind(this)}/>
        <TranslateOutput translation={this.state.translateText}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
