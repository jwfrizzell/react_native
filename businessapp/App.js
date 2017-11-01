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
  Image,
  ScrollView,
  Switch,
  ToolbarAndroid
} from 'react-native';

import Home from './app/components/Home/home';
import About from './app/components/About/about';
import Contact from './app/components/Contact/contact';
var s = require('./app/style');

export default class App extends Component<{}> {
  constructor(){
    super();
    this.state = {
      logoHidden: false
    }
  }

  render() {
    logoHidden = this.state.logoHidden;
    let img = <Text/>;

    if(!logoHidden){
      img =  <Image style={s.image} source={require('./logo.png')} />;
    }
    return (
      <View>
        <ToolbarAndroid
          style={s.toolbar}
          logo={require('./ic_launcher.png')}
          title={'My Company'}
        />
        <Text/>
        <View style={s.imageWrap}>
          {img}
          <Switch 
            onValueChange={(value) => this.setState({logoHidden: value})}
            value = {this.state.logoHidden}
          />
        </View>
        <ScrollView style={s.scrollView}>
          <Home />
          <About />
          <Contact />
        </ScrollView>
      </View>
    );
  }
}